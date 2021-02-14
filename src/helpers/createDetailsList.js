export default ({data}) => {
  return [
    { label: 'Ветер', value: `${data?.wind?.speed} м/с, какой`},
    { label: 'Давление', value: `${data?.main?.pressure} рт. ст.`},
    { label: 'Влажность', value: `${data?.main?.humidity} рт. ст.`},
    { label: 'Облачность', value: `${data?.clouds?.all}%`},
  ]
}