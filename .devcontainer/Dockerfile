# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.185.0/containers/javascript-node/.devcontainer/base.Dockerfile

ARG NPM_TOKEN
ARG VARIANT=14
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT} as base
RUN apt-get update \
  && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends apt-utils dialog 2>&1
# RUN su ${USERNAME} -c "npm install -g yarn"
RUN mkdir -p /home/${USERNAME}/.vscode-server/extensions
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.zsh_history" \
  && mkdir /commandhistory \
  && touch /commandhistory/.zsh_history \
  && echo ${SNIPPET} >> "/home/${USERNAME}/.zshrc"
ENV NODE_ENV development
ENV ENVIRONMENT development

FROM base as installer
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base as runner
WORKDIR /usr/src/app
COPY . .
COPY --from=installer /usr/src/app/node_modules/ /usr/src/app/package.json /usr/src/app/yarn.lock ./