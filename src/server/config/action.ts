import "server-only";

import z, { ZodError } from "zod";

import { ServerResponse } from "../responses";
import { ServerException } from "../exceptions";

type DefineServerAction<TInputSchema extends z.ZodTypeAny, TOutput> = {
  inputSchema: TInputSchema;
  handler: (_args: z.infer<TInputSchema>) => Promise<TOutput>;
};

export function serverAction<TInputSchema extends z.ZodTypeAny, TOutput>({
  inputSchema,
  handler,
}: DefineServerAction<TInputSchema, TOutput>) {
  return async (
    input: z.infer<TInputSchema>,
  ): Promise<ServerResponse<TOutput>> => {
    try {
      const args = inputSchema.parse(input);
      const result = await handler(args);

      return { data: result };
    } catch (exception) {
      if (exception instanceof ZodError) {
        console.error(exception);
        return {
          error: {
            message: "Ocorreu um erro inesperado!",
            data: undefined,
            status: 500,
          },
        };
      }

      if (exception instanceof ServerException) {
        const error = new Error(exception.message);
        error.name = exception.message;

        return {
          error: {
            message: exception.message,
            data: exception.data,
            status: exception.status,
          },
        };
      } else {
        throw exception;
      }
    }
  };
}
