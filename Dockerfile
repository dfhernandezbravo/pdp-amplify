# hadolint ignore=DL3007
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.18.0-alpine3.16
WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

ARG NEXT_PUBLIC_HOST
ARG NEXT_PUBLIC_BFF_URL
ARG NEXT_PUBLIC_API_KEY_BFF
ARG NPM_TOKEN
ARG NEXT_PUBLIC_RATING_AND_REVIEWS_URI

ENV NEXT_PUBLIC_HOST=$NEXT_PUBLIC_HOST
ENV NEXT_PUBLIC_BFF_URL=$NEXT_PUBLIC_BFF_URL
ENV NEXT_PUBLIC_API_KEY_BFF=$NEXT_PUBLIC_API_KEY_BFF
ENV NPM_TOKEN=$NPM_TOKEN
ENV NEXT_PUBLIC_RATING_AND_REVIEWS_URI=$NEXT_PUBLIC_RATING_AND_REVIEWS_URI

RUN echo "NEXT_PUBLIC_HOST -- $NEXT_PUBLIC_HOST"
RUN echo "NEXT_PUBLIC_BFF_URL -- $NEXT_PUBLIC_BFF_URL"
RUN echo "NEXT_PUBLIC_API_KEY_BFF -- $NEXT_PUBLIC_API_KEY_BFF"
RUN echo "NEXT_PUBLIC_RATING_AND_REVIEWS_URI --$NEXT_PUBLIC_RATING_AND_REVIEWS_URI"
RUN npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=$NPM_TOKEN

RUN NODE_ENV='' yarn install && \
    yarn build

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8081
CMD [ "yarn", "start", "-p", "8081"]
