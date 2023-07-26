// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status = document.querySelector('#book1 .status')
reserve = document.querySelector('#book1 .reserve')
checkout = document.querySelector('#book1 .checkout')
checkin = document.querySelector('#book1 .checkin')

status = document.querySelector('#book2 .status')
reserve = document.querySelector('#book2 .reserve')
checkout = document.querySelector('#book2 .checkout')
checkin = document.querySelector('#book2 .checkin')

status = document.querySelector('#book3 .status')
reserve = document.querySelector('#book3 .reserve')
checkout = document.querySelector('#book3 .checkout')
checkin = document.querySelector('#book3 .checkin')

checkin0.color = none
status0.style.color = STATUS_MAP.status.color
reserve0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'


//Overdue
if(STATUS_MAP.overdue.canReserve) {
    canReserve.disabled = false
}

if(STATUS_MAP.overdue.canCheckIn) {
    canCheckIn.disabled = false
}

if(STATUS_MAP.overdue.canCheckout) {
    canCheckout.disabled = true
}


//Reserved
if(STATUS_MAP.reserved.canReserve) {
    canReserve.disabled = false
}

if(STATUS_MAP.reserved.canCheckIn) {
    canCheckIn.disabled = true
}

if(STATUS_MAP.reserved.canCheckout) {
    canCheckout.disabled = false
}

//Shelf
if(STATUS_MAP.shelf.canReserve) {
    canReserve.disabled = true
}

if(STATUS_MAP.shelf.canCheckIn) {
    canCheckIn.disabled = false
}

if(STATUS_MAP.shelf.canCheckout) {
    canCheckout.disabled = true
}

checkin1.color = none
status1.style.color = STATUS_MAP.status.color
reserve1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin2.color = none
status2.style.color = STATUS_MAP.status.color
reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'