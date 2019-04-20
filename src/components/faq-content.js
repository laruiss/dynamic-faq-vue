import slugify from "@sindresorhus/slugify";

const content = [
  {
    title: "Un titre",
    body: `<p>
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link>
    </p>`
  },
  {
    title: "Un autre titre",
    body: `<p>
      <router-link to="/faq">Faq</router-link>
      <router-link to="/">Home</router-link>
    </p>`
  }
];

export default content.map(elt => ({
  ...elt,
  id: slugify(elt.title)
}));
