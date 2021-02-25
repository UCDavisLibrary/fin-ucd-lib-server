ARG CORE_SERVER_REPO_TAG
FROM ucdlib/fin-node-utils:${CORE_SERVER_REPO_TAG} as fin-node-utils
FROM node:14

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm link
ENV NODE_PATH /usr/local/lib/node_modules

RUN mkdir /fin-ucd-lib-node-utils
WORKDIR /fin-ucd-lib-node-utils

COPY package.json .
COPY package-lock.json .

RUN npm link
ENV NODE_PATH /usr/local/lib/node_modules/

COPY index.js .
COPY lib lib
COPY models models