FROM node:14.18-alpine
RUN apk update && apk add bash && apk add curl

WORKDIR /app

COPY src/. ./src
COPY package.json .
COPY .babelrc .
COPY scripts/. ./scripts

RUN npm install
RUN npm run build

# Create a group and user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN chown -R appuser:appgroup /app

# Tell docker that all future commands should run as the appuser user
USER appuser
CMD ["npm", "start"]
