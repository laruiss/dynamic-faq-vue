<script>
import Vue from "vue";

import faqContent from "./faq-content";

for (const question of faqContent) {
  Vue.component(question.id, {
    template: `
    <div>
      <h3 v-html="title"></h3>
      ${question.body}
    </div>
    `,
    data() {
      return {
        title: question.title
      };
    }
  });
}

export default Vue.component("Faq", {
  template: `
    <ul>
      ${faqContent.map(elt => `<${elt.id}/>`).join("")}
    </ul>
  `
});
</script>
