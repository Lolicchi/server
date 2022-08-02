import { serve } from 'https://deno.land/std/http/server.ts'

try {
  const port = Number(Deno.env.get('PORT')) || 8080,
    res = `{ x: Deno Server ${Deno.pid}, at: ${port} }`

  serve(() => new Response(res), {
    port
  })

  console.log(res)
} catch (err) {
  console.log(err)
}
