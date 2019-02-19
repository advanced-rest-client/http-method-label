import '@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="http-method-label-common-styles">
  <template>
    <style>
    :host {
      --method-label-default-background-color: rgba(128, 128, 128, 0.12);
      --method-label-default-color: rgb(128, 128, 128);

      --method-label-common-style: {
        display: inline-block;
        margin: var(--http-method-label-margin, 0px 8px 8px 0px);
        padding: var(--http-method-label-padding, 2px 6px);
        background-color: var(--http-method-label-background-color, var(--method-label-default-background-color));
        color: var(--http-method-label-color, var(--method-label-default-color));
        text-transform: uppercase;
        border-radius: var(--http-method-label-border-radius, 3px);
        font-weight: var(--http-method-label-font-weigth, 400);
        font: inherit;
        font-size: inherit;
        @apply --http-method-label;
      }

      --method-label-get: {
        background-color: var(--http-method-label-get-background-color, rgba(0, 128, 0, 0.12));
        color: var(--http-method-label-get-color, rgb(0, 128, 0));
        @apply --http-method-label-get;
      }

      --method-label-post: {
        background-color: var(--http-method-label-post-background-color, rgba(33, 150, 243, 0.12));
        color: var(--http-method-label-post-color, rgb(33, 150, 243));
        @apply --http-method-label-post;
      }

      --method-label-put: {
        background-color: var(--http-method-label-put-background-color, rgba(255, 165, 0, 0.12));
        color: var(--http-method-label-put-color, rgb(255, 165, 0));
        @apply --http-method-label-put;
      }

      --method-label-delete: {
        background-color: var(--http-method-label-delete-background-color, rgba(244, 67, 54, 0.12));
        color: var(--http-method-label-delete-color, rgb(244, 67, 54));
        @apply --http-method-label-delete;
      }

      --method-label-patch: {
        background-color: var(--http-method-label-patch-background-color, rgba(156, 39, 176, 0.12));
        color: var(--http-method-label-patch-color, rgb(156, 39, 176));
        @apply --http-method-label-patch;
      }

      --method-label-options: {
        background-color: var(--http-method-label-options-background-color, var(--method-label-default-background-color));
        color: var(--http-method-label-options-color, var(--method-label-default-color));
        @apply --http-method-label-options;
      }

      --method-label-head: {
        background-color: var(--http-method-label-head-background-color, var(--method-label-default-background-color));
        color: var(--http-method-label-head-color, var(--method-label-default-color));
        @apply --http-method-label-head;
      }

      --method-label-trace: {
        background-color: var(--http-method-label-trace-background-color, var(--method-label-default-background-color));
        color: var(--http-method-label-trace-color, var(--method-label-default-color));
        @apply --http-method-label-trace;
      }

      --method-label-connect: {
        background-color: var(--http-method-label-connect-background-color, var(--method-label-default-background-color));
        color: var(--http-method-label-connect-color, var(--method-label-default-color));
        @apply --http-method-label-connect;
      }
    }

    .method-label {
      @apply --method-label-common-style;
    }

    .method-label[data-method="get"],
    .method-label[data-method="GET"] {
      @apply --method-label-get;
    }

    .method-label[data-method="post"],
    .method-label[data-method="POST"] {
      @apply --method-label-post;
    }

    .method-label[data-method="put"],
    .method-label[data-method="PUT"] {
      @apply --method-label-put;
    }

    .method-label[data-method="delete"],
    .method-label[data-method="DELETE"] {
      @apply --method-label-delete;
    }

    .method-label[data-method="patch"],
    .method-label[data-method="PATCH"] {
      @apply --method-label-patch;
    }

    .method-label[data-method="options"],
    .method-label[data-method="OPTIONS"] {
      @apply --method-label-options;
    }

    .method-label[data-method="head"],
    .method-label[data-method="HEAD"] {
      @apply --method-label-head;
    }

    .method-label[data-method="trace"],
    .method-label[data-method="TRACE"] {
      @apply --method-label-trace;
    }

    .method-label[data-method="connect"],
    .method-label[data-method="CONNECT"] {
      @apply --method-label-connect;
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
