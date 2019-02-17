'use strict';

class OperationExecutor {
    constructor() {
        this.state = {
            0: this.firstTaskExecute.bind(this),
            1: this.secondTaskExecute.bind(this),
            2: this.thirdTaskExecute.bind(this),
            3: this.fourthTaskExecute.bind(this),
            4: this.fifthTaskExecute.bind(this),
            5: this.sixthTaskExecute.bind(this),
            6: this.seventhTaskExecute.bind(this),
            7: this.eighthTaskExecute.bind(this),
            8: this.ninthTaskExecute.bind(this),
            9: this.tenthTaskExecute.bind(this),
        };
    }

    /**
     * Execute some transformation of incoming arg
     * @param actionType – type of transformation
     * @param arg – incoming arg
     * @returns object with result
     */
    execute(actionType, arg) {
        return this.state[actionType](arg);
    }

    /**
     * First task of homework
     * @param arg – object with value that you should clone
     * arg = { obj1: { ... } }
     * @returns object that contains source object and his modified clone
     */
    firstTaskExecute(arg) {
        let copy = {};
        copy.obj2 =  Object.assign({}, arg.obj1);
        copy.obj2.firstName = "Vova";
        copy = Object.assign(copy, arg);
        return copy /* variable with result */;
    }

    /**
     * Second task of homework
     * @param arg – object with values that you should combine
     * arg = { obj1: { ... }, obj2: { ... } }
     * @returns object that contains source objects and their combined and modified clone
     */
    secondTaskExecute(arg) {
        let result = {};
        result.obj3 = {
            ...arg.obj1,
            ...arg.obj2
        };
        result.obj3.a = 10000;
        result = Object.assign(result, arg);
        return result /* variable with result */;
    }

    /**
     * Third task of homework
     * @param arg – object with value that you should modify
     * arg = { obj1: { ... } }
     * @returns object that contains modified source object
     */
    thirdTaskExecute(arg) {
        let new_obj = Object.assign({}, arg);
        let addGender = (persons) => persons.forEach(person => {
                if (person.firstName === "Roma") {
                    person.gender = "male";
                } else {
                    person.gender = "female";
                }
            }
        );
        addGender(new_obj.obj1.relatives);
        return new_obj /* variable with result */;
    }

    /**
     * Fourth task of homework
     * @param arg – object with value that contains relatives
     * arg = { obj1: { ... relatives: [ ... ] ... } }
     * @returns object that contains array of string with female relatives
     */
    fourthTaskExecute(arg) {
        let greetings = [];
        var addGreeting = (obj) => {
            greetings.push(`Hello, ${obj.firstName} ${obj.lastName}`);
        };
        for (let i = 0; i < arg.obj1.relatives.length; i++) {
            if (arg.obj1.relatives[i].gender === "female") {
                addGreeting(arg.obj1.relatives[i]);
            }
        }
        return greetings /* variable with result */;
    }

    /**
     * Fifth task of homework
     * @param arg – object which contains new color of the button and the class of it
     * arg = { color: '...', className: '...' }
     * @returns string which contains the class of the button and current color
     */
    fifthTaskExecute(arg) {
        let elements = document.getElementsByClassName(arg.className);
        elements[0].style.cssText = `background-color: ${arg.color}`;
        return `${elements[0].className}, ${elements[0].style.backgroundColor}`;
    }

    /**
     * Sixth task of homework
     * @param arg – object with values that you should handle
     * arg = { obj1: { ... } }
     * @returns object that contains array of items that match the hostname on which the application is running
     */
    sixthTaskExecute(arg) {
        let hostnames = arg.hostNames;

        function checkHostname(hostname) {
            if (hostname == location.hostname) {
                return hostname;
            }
        }

        return hostnames.filter(checkHostname);
    }

    /**
     * Seventh task of homework
     * @param arg – object which contains simple key-value pairs
     * arg = { obj1: { key: value } }
     * @returns obj that contains swap pairs ('value: key')
     */
    seventhTaskExecute(arg) {
        let new_obj = {};
        for (let prop in arg) {
            if (arg.hasOwnProperty(prop)) {
                new_obj[arg[prop]] = prop;
            }
        }
        return new_obj;
    }

    /**
     * Eighth task of homework
     * @param arg – object which contains two array
     * arg = { obj1: { ... } }
     * @returns obj that built using array's values
     */
    eighthTaskExecute(arg) {
        let array = [];
        let concatenatedObj = {};
        concatenatedObj.array = array.concat(arg.arr1, arg.arr2);
        let new_obj = {};
        for (let i = 0; i < concatenatedObj.array.length; i++) {
            if (i % 2 === 0) {
                if ((i + 1) < concatenatedObj.array.length) {
                    new_obj[concatenatedObj.array[i]] = concatenatedObj.array[i + 1];
                }
                else {
                    new_obj[concatenatedObj.array[i]] = null;
                }
            }
        }
        return new_obj;
    }

    /**
     * Ninth task of homework
     * @param arg – object which contains array of users
     * arg = { obj1: { users: [...] } }
     * @returns obj that contains pairs id: obj with this id
     */
    ninthTaskExecute(arg) {
        let new_obj = {};
        for (let i = 0; i < arg.users.length; i++) {
            new_obj[(arg.users[i]).id] = {"firstName": (arg.users[i]).firstName, "lastName": (arg.users[i]).lastName};
        }
        return new_obj;
    }

    /**
     * Tenth task of homework
     * @param arg – object which contains class of item and empty array
     * arg = { obj1: { ... } }
     * @returns obj that contains the array with info about children of the node
     */
    tenthTaskExecute(arg) {
        let childrenInfo = Object.assign({}, arg);
        let elements = document.getElementsByClassName(arg.className);
        for (let i = 0; i < elements.length; i++) {
            for (let j = 0; j < elements[i].children.length; j++) {
                let child = elements[i].children[j];
                childrenInfo.childrenInfo.push({"tag": child.tagName, "class": child.className});
            }
        }
        return childrenInfo;
    }
}

export default OperationExecutor;
