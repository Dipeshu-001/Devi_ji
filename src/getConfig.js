import 'dotenv/config'
const getConfig = () => {
    return {
        name: process.env.NAME || 'Devi',
        session: process.env.SESSION || 'session',
        prefix: process.env.PREFIX || '#',
        port: process.env.PORT || 3000,
        imgbb: process.env.IMGBB,
        chatboturi: process.env.BRAINSHOP || '',
        mongo: process.env.MONGO || 'mongodb+srv://dipeshbot:toshi@cluster0.r7rbe6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        mods: process.env.MODS
            ? process.env.MODS.split(',').map((id) => {
                  if (id.endsWith('@s.whatsapp.net')) return id
                  return id.replace('+', '').concat('@s.whatsapp.net')
              })
            : []
    }
}

export default getConfig
