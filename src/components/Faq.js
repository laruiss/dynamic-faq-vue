import Vue from "vue";

export default function getListComponent(name, content) {
  for (const question of content) {
    Vue.component(question.id, {
      template: `
      <div class="c-content-item">
        <h3 id="${question.id}">
          <router-link to="#${question.id}" v-html="title"/>
        </h3>
        <div>
          ${question.body}
        </div>
      </div>
      `,
      data() {
        return {
          title: question.title
        };
      }
    });
  }

  return Vue.component(name, {
    template: `
      <ul>
        ${content.map(elt => `<${elt.id}/>`).join("")}
      </ul>
    `
  });
}
