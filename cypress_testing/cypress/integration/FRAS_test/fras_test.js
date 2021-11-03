/* eslint-disable no-undef */
/// <reference types = "cypress" />

describe("Test case 1, Login authentication", () => {
    context("teacher login", () => {
        it('visit page', () => {
            cy.visit("http://localhost:3000")
        })
        it('teacher domain successfull log in', () => {
            cy.visit("http://localhost:3000")
            cy.get('.domain')
                .select('Teacher')
            cy.get('.domain').should('have.value', 'teacher')
            cy.get('[type="text"]').type('eug0001')
            cy.get('[type="password"]').type('1234')
            cy.contains('Sign in').click()
            cy.url().should('eq', 'http://localhost:3000/home')
        })
        it('teacher domain failed log in', () => {
            cy.visit("http://localhost:3000")
            cy.get('.domain')
                .select('Teacher')
            cy.get('.domain').should('have.value', 'teacher')
            cy.get('[type="text"]').type('eug0001')
            cy.get('[type="password"]').type('wrong password')
            cy.contains('Sign in').click()
            cy.url().should('eq', 'http://localhost:3000/')
        })
    })
    context("student login", () => {
        it('student domain successfull log in', () => {
            cy.visit("http://localhost:3000")
            cy.get('.domain')
                .select('Student')
            cy.get('.domain').should('have.value', 'student')
            cy.get('[type="text"]').type('bob0001')
            cy.get('[type="password"]').type('111')
            cy.contains('Sign in').click()
            cy.url().should('eq', 'http://localhost:3000/home')
        })
        it('student domain failed log in', () => {
            cy.visit("http://localhost:3000")
            cy.get('.domain')
                .select('Student')
            cy.get('.domain').should('have.value', 'student')
            cy.get('[type="text"]').type('bob0001')
            cy.get('[type="password"]').type('wrong password')
            cy.contains('Sign in').click()
            cy.url().should('eq', 'http://localhost:3000/')
        })
    })
});

describe("Student view attendance", () => {
    it("Attendance record exists", () => {
        cy.visit("http://localhost:3000")
        cy.get('.domain')
            .select('Student')
        cy.get('.domain').should('have.value', 'student')
        cy.get('[type="text"]').type('bob0001')
        cy.get('[type="password"]').type('111')
        cy.contains('Sign in').click()
        cy.url().should('eq', 'http://localhost:3000/home')
        cy.get(':nth-child(1) > .sc-gKseQn').click()
        cy.get('#view_attendance_student > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-bBXrwG > .sc-iJuVqt > .sc-fodVek').click()
        cy.get('#course')
            .select('CZ3001')
        cy.get('#course').should('have.value', 'CZ3001')
        cy.get('#index')
            .select("AB1")
        cy.get('input').type('October 21, 2021', {force: true})
        cy.get('input').click() 
        cy.contains('Go').click()
        cy.get('[data-layer="Content"]').should('not.exist')
    })
    it("Attendance record does not exists", () => {
        cy.visit("http://localhost:3000")
        cy.get('.domain')
            .select('Student')
        cy.get('.domain').should('have.value', 'student')
        cy.get('[type="text"]').type('bob0001')
        cy.get('[type="password"]').type('111')
        cy.contains('Sign in').click()
        cy.url().should('eq', 'http://localhost:3000/home')
        cy.get(':nth-child(1) > .sc-gKseQn').click()
        cy.get('#view_attendance_student > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-bBXrwG > .sc-iJuVqt > .sc-fodVek').click()
        cy.get('#course')
            .select('CZ3001')
        cy.get('#course').should('have.value', 'CZ3001')
        cy.get('#index')
            .select("AB1")
        cy.get('input').type('October 28, 2021', {force: true})
        cy.get('input').click() 
        cy.contains('Go').click()
        cy.contains('No attendance record').should("be.visible")
    })
    it("Attendance record absent", () => {
        cy.visit("http://localhost:3000")
        cy.get('.domain')
            .select('Student')
        cy.get('.domain').should('have.value', 'student')
        cy.get('[type="text"]').type('bob0001')
        cy.get('[type="password"]').type('111')
        cy.contains('Sign in').click()
        cy.url().should('eq', 'http://localhost:3000/home')
        cy.get(':nth-child(1) > .sc-gKseQn').click()
        cy.get('#view_attendance_student > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-bBXrwG > .sc-iJuVqt > .sc-fodVek').click()
        cy.get('#course')
            .select('CZ3007')
        cy.get('#course').should('have.value', 'CZ3007')
        cy.get('#index')
            .select("CD1")
        cy.get('input').type('October 13, 2021', {force: true})
        cy.get('input').click() 
        cy.contains('Go').click()
        cy.contains('absent')
    })
});

describe('Teacher view attendance', () => {
    it("Attendance record exists", () => {
        cy.visit("http://localhost:3000")
        cy.get('.domain')
            .select('Teacher')
        cy.get('.domain').should('have.value', 'teacher')
        cy.get('[type="text"]').type('eug0001')
        cy.get('[type="password"]').type('1234')
        cy.contains('Sign in').click()
        cy.url().should('eq', 'http://localhost:3000/home')
        cy.get(':nth-child(1) > .sc-gKseQn').click()
        cy.get('#view_attendance_teacher > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-bBXrwG > .sc-iJuVqt > .sc-fodVek').click()
        cy.get('#course')
            .select('CZ3001')
        cy.get('#course').should('have.value', 'CZ3001')
        cy.get('#index')
            .select("AB1")
        cy.get('input').type('October 21, 2021', {force: true})
        cy.get('input').click() 
        cy.contains('Go').click()
        cy.get('[data-layer="Content"]').should('not.exist')
    })
    it("Attendance record does not exists", () => {
        cy.visit("http://localhost:3000")
        cy.get('.domain')
            .select('Teacher')
        cy.get('.domain').should('have.value', 'teacher')
        cy.get('[type="text"]').type('eug0001')
        cy.get('[type="password"]').type('1234')
        cy.contains('Sign in').click()
        cy.url().should('eq', 'http://localhost:3000/home')
        cy.get(':nth-child(1) > .sc-gKseQn').click()
        cy.get('#view_attendance_teacher > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-bBXrwG > .sc-iJuVqt > .sc-fodVek').click()
        cy.get('#course')
            .select('CZ3001')
        cy.get('#course').should('have.value', 'CZ3001')
        cy.get('#index')
            .select("AB1")
        cy.get('input').type('September 2, 2021', {force: true})
        cy.get('input').click() 
        cy.contains('Go').click()
        cy.contains('No attendance record').should("be.visible")
    })
});

describe('Teacher view absentees', () => {
    it("View absentees record", () => {
        cy.visit("http://localhost:3000")
        cy.get('.domain')
            .select('Teacher')
        cy.get('.domain').should('have.value', 'teacher')
        cy.get('[type="text"]').type('eug0001')
        cy.get('[type="password"]').type('1234')
        cy.contains('Sign in').click()
        cy.url().should('eq', 'http://localhost:3000/home')
        cy.get(':nth-child(1) > .sc-gKseQn').click()
        cy.get('#absentees > .sc-hHfuMS > .sc-dmlqKv > .sc-kfzBvY > .sc-bBXrwG > .sc-iJuVqt > .sc-fodVek').click()
        cy.contains('Absentees for your courses')
    })
});