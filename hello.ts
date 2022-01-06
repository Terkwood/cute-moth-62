addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(JSON.stringify({ ohhi: "GREETINGS!" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    }),
  );
});
