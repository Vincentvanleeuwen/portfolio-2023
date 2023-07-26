<template>
  <PageHeader title="Contact" />

  <section class="Container">
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <label class="hidden">
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
      <label>Name <input type="text" name="name" /></label>

      <label>Email address <input type="email" name="email" /></label>

      <label>Message <textarea name="message"></textarea></label>

      <div data-netlify-recaptcha="true"></div>

      <button type="submit">Send e-mail</button>
    </form>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
onMounted(() => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    const params = new URLSearchParams();

    // We're making an "any" type assertion here to get around TypeScript's complaint
    for (const pair of (formData as any).entries()) {
      if (typeof pair[1] === "string") {
        params.append(pair[0], pair[1]);
      }
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error: Error) => alert(error));
  };

  document.querySelector("form")?.addEventListener("submit", handleSubmit);
});
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.Container {
  padding: 0 3rem 8rem;
}
form {
  max-width: 680px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    letter-spacing: 2px;

    input {
      max-width: 50%;
      min-height: 35px;
      margin-top: 6px;
    }
    textarea {
      min-height: 150px;
    }
    textarea,
    input {
      border: none;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    }
  }

  button {
    border: none;
    background-color: $c-cta;
    padding: 12px 16px;
    font-family: "Raleway";
    font-weight: 900;
    color: $c-black;
    text-decoration: none;
    font-size: 20px;
  }

  p:last-child {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
