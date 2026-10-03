# TODO: Backend placeholder files
# ================================
# These are stub files for the NestJS backend modules.
# Implementation will be done in a later phase.

## Planned Modules:

### Products Module (`src/modules/products/`)
- `products.controller.ts` — GET /api/products, GET /api/products/:slug
- `products.service.ts` — business logic
- `products.entity.ts` — TypeORM entity
- `products.module.ts`

### Orders Module (`src/modules/orders/`)
- `orders.controller.ts` — POST /api/orders, GET /api/orders/:id
- `orders.service.ts`
- `orders.entity.ts`
- `orders.module.ts`

### Users Module (`src/modules/users/`)
- `users.controller.ts`
- `users.service.ts`
- `users.entity.ts`
- `users.module.ts`

### Auth Module (`src/modules/auth/`)
- `auth.controller.ts` — POST /api/auth/login, POST /api/auth/register
- `auth.service.ts`
- `auth.module.ts`
- `jwt.strategy.ts`
