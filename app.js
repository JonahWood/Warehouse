const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Zaktan',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Hakann',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Avak',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'Reidak',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Thok',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Vezok',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Vezon',
    trackingNumber: 'suz2367'
}]

function drawPackages(array){
    let packagesElement = document.getElementById('packages');
    let packageLineup = ''
    array.forEach(packages => {
        packageLineup += `<h2> Recipient: <b class="recipient"> ${packages.to} </b> </h2>`
        packageLineup += `<h2> Priority Level: ${packages.priorityLevel}</h2>`
        packageLineup += `<h2> Is Fragile: ${packages.isFragile}</h2>`
        packageLineup += `<h2> Package Weight (lbs): ${packages.weight}</h2>`
        packageLineup += `<h2> Package Tracking Number: ${packages.trackingNumber}</h2>`
        packageLineup += `<h2 class="pack-border"></h2>`
    })
    packagesElement.innerHTML = packageLineup
    // console.log('did it work');
}

function filterPackagesByPriorityExpress() {
    const pkgPrio = packages.filter(package => package.priorityLevel == "express")
    // console.log(pkgPrio);
    drawPackages(pkgPrio)
}
function filterPackagesByPriorityStandard() {
    const pkgPrio = packages.filter(package => package.priorityLevel == "standard")
    // console.log(pkgPrio);
    drawPackages(pkgPrio)
}
function filterPackagesByPriorityFree() {
    const pkgPrio = packages.filter(package => package.priorityLevel == "free")
    // console.log(pkgPrio);
    drawPackages(pkgPrio)
}
function filterPackagesByFragilityTrue() {
    const pkgFrag = packages.filter(package => package.isFragile == true)
    // console.log(pkgFrag);
    drawPackages(pkgFrag)
}
function filterPackagesByFragilityFalse() {
    const pkgFrag = packages.filter(package => package.isFragile == false)
    // console.log(pkgFrag);
    drawPackages(pkgFrag)
}
function filterPackagesByWeightHeavy() {
    const pkgWeigh = packages.filter(package => package.weight >= 4)
    // console.log(pkgWeigh);
    drawPackages(pkgWeigh)
}
function filterPackagesByWeightLight() {
    const pkgWeigh = packages.filter(package => package.weight < 4)
    // console.log(pkgWeigh);
    drawPackages(pkgWeigh)
}

    drawPackages(packages)