import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    action: '/second',
    image:"/public/img-frame1.png",
    intents: [
    <Button>siguiente</Button>,
    
    
    
      
      

      
    ],
  })
})

app.frame('/second', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    action: '/tercero',
    image:"/public/img-frame2.png",
    intents: [
     
      <Button>siguiente</Button>,
      
      
      

      
    ],
  })
})

app.frame('/tercero', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    
    image:"/public/img-frame3.png",
    intents: [
      <Button.Link href='https://warpcast.com/~/channel/bnfarcaster'>Warpcast</Button.Link>,  
      <Button.Link href='https://www.youtube.com/@BuenasNochesFarcaster'>Youtube</Button.Link>,
    <Button.Reset>Reset</Button.Reset>,
      
      
      

      
    ],
  })
})

const isCloudflareWorker = typeof caches !== 'undefined'
if (isCloudflareWorker) {
  const manifest = await import('__STATIC_CONTENT_MANIFEST')
  const serveStaticOptions = { manifest, root: './' }
  app.use('/*', serveStatic(serveStaticOptions))
  devtools(app, { assetsPath: '/frog', serveStatic, serveStaticOptions })
} else {
  devtools(app, { serveStatic })
}

export default app
