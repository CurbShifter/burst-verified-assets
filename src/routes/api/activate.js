import { serializeResponse } from './__helpers__/serializeResponse'
import { HttpImpl, HttpError } from '@burstjs/http'

const http = new HttpImpl(process.env.SAPPER_APP_ACTIVATION_SERVICE_URL)

export async function post(req, res) {
    const { account, publicKey } = req.body

    console.log('Activating', account, publicKey)
    console.log(process.env.SAPPER_APP_ACTIVATION_SERVICE_URL)

    try {
        await Promise.resolve()
        //await http.post({account, publickey: publicKey})
        res.end()
        console.log('Sent activation message successfully to', account)
    } catch (e) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = e.status || 500
        res.end(serializeResponse({ message: e.message }))
        console.error('Activation failed', e)
    }
}