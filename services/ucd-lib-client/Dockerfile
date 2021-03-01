ARG NODEJS_BASE
FROM ${NODEJS_BASE}

RUN mkdir /service
WORKDIR /service

ADD package.json .
ADD package-lock.json .
RUN npm install && npm dedupe

RUN npm link @ucd-lib/fin-ucd-lib-node-utils

# client build
COPY client/build.sh client/build.sh
COPY client/webpack-dist.config.js client/webpack-dist.config.js

# client npm packages
COPY client/public/package.json client/public/package.json
COPY client/public/package-lock.json client/public/package-lock.json
RUN cd client/public && npm install
RUN cd client/public && ln -s node_modules/\@ucd-lib/cork-app-load/lib loader

# copt client code
COPY client/public/images client/public/images
COPY client/public/index.html client/public/index.html
COPY client/public/jwt.html client/public/jwt.html
COPY client/public/ie.html client/public/ie.html
COPY client/public/manifest.json client/public/manifest.json
COPY client/public/lib client/public/lib
COPY client/public/elements client/public/elements

# build the client 
RUN npm run dist

ADD index.js .
ADD config.js .
COPY controllers controllers
COPY lib lib
COPY models models

# set repo tags
ARG UCD_LIB_SERVER_REPO_HASH
ARG UCD_LIB_SERVER_REPO_TAG
ENV UCD_LIB_SERVER_REPO_HASH ${UCD_LIB_SERVER_REPO_HASH}
ENV UCD_LIB_SERVER_REPO_TAG ${UCD_LIB_SERVER_REPO_TAG}

ARG CORE_SERVER_REPO_HASH
ARG CORE_SERVER_REPO_TAG
ENV CORE_SERVER_REPO_HASH ${CORE_SERVER_REPO_HASH}
ENV CORE_SERVER_REPO_TAG ${CORE_SERVER_REPO_TAG}

# set build tags
ARG APP_VERSION
ENV APP_VERSION ${APP_VERSION}
ARG BUILD_NUM
ENV BUILD_NUM ${BUILD_NUM}
ARG BUILD_TIME
ENV BUILD_TIME ${BUILD_TIME}

CMD node index.js