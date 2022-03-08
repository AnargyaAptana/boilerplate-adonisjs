FROM node:16.13.1-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN cp .env build/


FROM node:16.13.1-alpine AS final
WORKDIR /app
COPY --from=builder /app/build /app
RUN npm ci --production --only=production
CMD ["/bin/sh", "-c", "node server.js"]
