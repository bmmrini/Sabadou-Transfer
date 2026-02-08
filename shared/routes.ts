import { z } from 'zod';
import { insertContactMessageSchema, agencies, blogPosts, feeTiers } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  agencies: {
    list: {
      method: 'GET' as const,
      path: '/api/agencies' as const,
      input: z.object({
        search: z.string().optional(),
        prefecture: z.string().optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof agencies.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/agencies/:id' as const,
      responses: {
        200: z.custom<typeof agencies.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  fees: {
    calculate: {
      method: 'POST' as const,
      path: '/api/fees/calculate' as const,
      input: z.object({
        amount: z.coerce.number().min(0),
      }),
      responses: {
        200: z.object({
          fee: z.number(),
          total: z.number(),
          amount: z.number(),
        }),
        400: errorSchemas.validation,
      },
    },
  },
  blog: {
    list: {
      method: 'GET' as const,
      path: '/api/blog' as const,
      responses: {
        200: z.array(z.custom<typeof blogPosts.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/blog/:slug' as const,
      responses: {
        200: z.custom<typeof blogPosts.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact' as const,
      input: insertContactMessageSchema,
      responses: {
        201: z.object({ success: z.boolean() }),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
