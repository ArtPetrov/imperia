FROM mcr.microsoft.com/playwright:v1.12.2-focal

ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD true
ENV APP_DIR /app/

EXPOSE 8080

WORKDIR $APP_DIR
RUN mkdir -p /app/

COPY package.json package-lock.json tsconfig.json $APP_DIR
RUN cd $APP_DIR && npm install
COPY src/ $APP_DIR/src/

CMD npx ts-node src/app.ts
