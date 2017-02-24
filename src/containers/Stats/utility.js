function prepCodingStats(codingStats){
  codingStats.forEach(stat => {
    stat.value = stat.value.toString().replace(/,/g, '')
    stat.displayValue = '0'

    // check if value is not a number
    if(isNaN(stat.value)){
      stat.displayValue = stat.value
      return
    }

    let endValueArray = stat.value.split('')
    let displayValueArray = stat.displayValue.split('')
    while(displayValueArray.length !== endValueArray.length) displayValueArray.push("0")

    stat.displayValue = displayValueArray.join('')
  })
}

function prepSnowboardingStats(snowboardStats){
  return [{
    displayValue: 0,
    value: snowboardStats.profileStats.verticalFeet,
    title: 'vertical feet'
  },{
    displayValue: snowboardStats.profileStats.mostVisitedResortName,
    value: snowboardStats.profileStats.mostVisitedResortName,
    title: 'most visited'
  },{
    displayValue: 0,
    value: snowboardStats.profileStats.daysOnMountain,
    title: 'trips to keystone'
  },{
    displayValue: 0,
    value: snowboardStats.profileStats.lifts,
    title: 'lifts taken'
  }]
}

function prepSnowboardData(snowboardStats){
  let data = [] 
  snowboardStats.pagedResult.list.forEach(sd => {
    let dateArray = sd.date.split('/')
    data.push({
      date: dateArray[0] + '/' + dateArray[1],
      resortName: sd.resortName,
      value: sd.totalVerticalFeet.toLocaleString(),
      displayPercent: 7 + '%',
      percent: (sd.totalVerticalFeet / snowboardStats.verticalFeetMax * 100)
    })
  })

  return data
}

export function prepStats(stats){
  prepCodingStats(stats.codingStats)
  stats.snowboardData = prepSnowboardData(stats.snowboardStats)
  stats.snowboardStats = prepSnowboardingStats(stats.snowboardStats)
}


export function getIncrementedValue(displayValue, endValue){
  let endValueCopy = endValue.toString().replace(/,/g, '')
  let displayValueCopy = displayValue.toString().replace(/,/g, '')

  if(displayValueCopy === endValueCopy) return false
  
  let endValueArray = endValueCopy.split('')
  let displayValueArray = displayValueCopy.split('')

  while(displayValueArray.length !== endValueArray.length) displayValueArray.push("0")

  displayValueArray.forEach((val, i) => {
    if(val >= endValueArray[i]) return
    val ++
    displayValueArray[i] = val.toString()
  })

  return parseInt(displayValueArray.join(''), 10).toLocaleString()
}