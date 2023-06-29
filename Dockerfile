FROM node:18.12.1 AS base
RUN npm i -g pnpm
WORKDIR /app

# Dependencies stage
FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./ 
RUN pnpm install

# Build stage
FROM dependencies AS build
COPY . .
RUN pnpm build && pnpm prune --prod

# Deploy stage
FROM base AS deploy
COPY --from=build /app/node_modules ./node_modules/ 
COPY --from=build /app/package.json ./ 
COPY --from=build /app/dist ./dist/ 
CMD ["pnpm", "start:prod"]
