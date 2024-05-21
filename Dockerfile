# hadolint ignore=DL3007
FROM ghcr.io/cencosud-cencommerce/dpt-images-utils-new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM ghcr.io/cencosud-cencommerce/dpt-images/utils/docker-images/node:18.18-alpine3.18
WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

ARG NEXT_PUBLIC_HOST
ARG NEXT_PUBLIC_BFF_URL
ARG NEXT_PUBLIC_API_KEY_BFF
ARG NPM_TOKEN
ARG NEXT_PUBLIC_RATING_AND_REVIEWS_URI
ARG NEXT_PUBLIC_CHECKOUT_URL

ENV NEXT_PUBLIC_HOST=$NEXT_PUBLIC_HOST
ENV NEXT_PUBLIC_BFF_URL=$NEXT_PUBLIC_BFF_URL
ENV NEXT_PUBLIC_API_KEY_BFF=$NEXT_PUBLIC_API_KEY_BFF
ENV NPM_TOKEN=$NPM_TOKEN
ENV NEXT_PUBLIC_RATING_AND_REVIEWS_URI=$NEXT_PUBLIC_RATING_AND_REVIEWS_URI
ENV NEXT_PUBLIC_CHECKOUT_URL=$NEXT_PUBLIC_CHECKOUT_URL

RUN echo "NEXT_PUBLIC_HOST -- $NEXT_PUBLIC_HOST"
RUN echo "NEXT_PUBLIC_BFF_URL -- $NEXT_PUBLIC_BFF_URL"
RUN echo "NEXT_PUBLIC_API_KEY_BFF -- $NEXT_PUBLIC_API_KEY_BFF"
RUN echo "NEXT_PUBLIC_RATING_AND_REVIEWS_URI --$NEXT_PUBLIC_RATING_AND_REVIEWS_URI"
RUN echo "NEXT_PUBLIC_CHECKOUT_URL --$NEXT_PUBLIC_CHECKOUT_URL"

# RUN npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=glpat-8ASRwMRojB3hcxaFgx3J
# RUN echo "npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=glpat-8ASRwMRojB3hcxaFgx3J"

RUN npm config set -- //npm.pkg.github.com/:_authToken=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
RUN echo "npm config set -- //npm.pkg.github.com/:_authToken=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"

RUN npm config set -- //node-registry.bit.cloud/:_authToken=f91ccd4c-0f9a-4ee7-ba17-40404dd9b05a

RUN NODE_ENV='' yarn install && \
    yarn build

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8081
ENTRYPOINT [ "yarn", "start", "-p", "8081"]
