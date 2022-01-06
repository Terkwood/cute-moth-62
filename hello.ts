addEventListener("fetch", (event) => {
  event.respondWith(
    new Response({ ohhi: "GREETINGS!" }, {
      status: 200,
      headers: { "content-type": "application/json" },
    }),
  );
});
