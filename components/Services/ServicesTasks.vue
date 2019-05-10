<template>
  <section class="p-services-item__tasks">
    <table>
      <tbody>
        <tr
          v-for="item, i in tasks"
          :key="i"
        >
          <td>
            <p class="p-services-item__task-key">{{item.key}}</p>
          </td>
          <td>
            <p class="p-services-item__task-val">{{item.val}}</p>
          </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
  .p-services-item__tasks {
    margin-top: 3.4375rem;
    transform: translateX(-30%);
    opacity: 0;
    transition: .8s transform cubic-bezier(.19,1,.22,1), .5s opacity cubic-bezier(.19,1,.22,1) .3s;
  }

  .p-services-item__tasks.in-viewport {
    transform: translateX(0%);
    opacity: 1;
  }

  .p-services-item__tasks.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
  }

  .p-services-item__tasks table {
    font-size: 1em;
  }

  .p-services-item__tasks table td {
    vertical-align: top;
  }

  .p-services-item__task-val {
    font-size: 1em;
    font-family: 'Futura PT medium';
  }

  .p-services-item__task-key {
    font-size: 1.25em;
    white-space: nowrap;
    text-transform: uppercase;
    font-family: 'Futura PT demi';
    margin-right: 3.625rem;
    margin-bottom: .35rem;
  }

  @media screen and (max-width: 991px) {
    .p-services-item__task-key {
      font-size: 1em;
    }
  }

  @media screen and (max-width: 600px) {
    .p-services-item__task-key {
      font-size: .9em;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 420px) {
    .p-services-item__task-key {
      margin-right: 1.5rem;
    }

    .p-services-item__tasks table {
      font-size: .95em;
    }

    .p-services-item__task-val {
      line-height: 1.2;
    }
  }
</style>
