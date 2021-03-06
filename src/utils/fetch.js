const fetch = require('node-fetch')
const parseXML = require('./string').parseXML
const buildXML = require('./string').buildXML

const defaultHeaders = {
  'Accept':  'application/json',
  'Content-Type': 'application/json'
}

exports.get = function (url, params = {}, headers = {}) {
  let queries = []

  Object.keys(params).forEach(param => queries.push(`${param}=${encodeURIComponent(params[param])}`))

  url = queries.length ? url + '?' + queries.join('&') : url
  console.log('fetch.get', url)

  return fetch(url, {
    method: 'GET',
    headers: defaultHeaders,
    headers
  }).then(r => r.json())
}

exports.post = function (url, request = {}, headers = {}) {
  console.log('fetch.post', url, request)
  return fetch(url, {
    method: 'POST',
    headers: defaultHeaders,
    headers,
    body: JSON.stringify(request)
  }).then(r => r.json())
}

exports.postXML = function (url, request = {}, headers = {}) {
  let xmlString = buildXML(request)
  console.log('fetch.postXML', url, request, xmlString)
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'text/xml; charset=utf-8',
      'Content-Type': 'text/xml; charset=utf-8'
    },
    body: xmlString
  }).then(r => r.text()).then(r => parseXML(r))
}

exports.patch = function (url, request = {}, headers = {}) {
  console.log('fetch.patch', url, request)
  return fetch(url, {
    method: 'PATCH',
    headers: defaultHeaders,
    headers,
    body: JSON.stringify(request)
  }).then(r => r.json())
}

exports.put = function (url, request = {}, headers = {}) {
  console.log('fetch.put', url, request)
  return fetch(url, {
    method: 'PUT',
    headers: defaultHeaders,
    headers,
    body: JSON.stringify(request)
  }).then(r => r.json())
}

exports.delete = function (url, headers = {}) {
  console.log('fetch.delete', url)
  return fetch(url, {
    method: 'DELETE',
    headers: defaultHeaders,
    headers,
    body: JSON.stringify(request)
  }).then(r => r.json())
}
