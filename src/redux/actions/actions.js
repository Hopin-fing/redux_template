import {ADD, ADD2, ADD_NUM, SUB} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUM,
        payload: number
    }
}

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
}