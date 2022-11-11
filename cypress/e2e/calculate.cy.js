// - [ ] 2개의 숫자에 대해 덧셈이 가능하다.
// - [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [ ] 2개의 숫자에 대해 곱셈이 가능하다.
// - [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

describe('숫자를 입력하면 화면에 보인다.', () => {
 beforeEach(() => {
  cy.visit('http://localhost:3000');
 });
 it('숫자 버튼들이 존재한다.', () => {
  cy.get('.digit').should('have.length', 10);
 });

 it('숫자 버튼을 연속해서 클릭하면 숫자가 입력된다.', () => {
  cy.get('.digit').contains('7').click();

  cy.get('.digit').contains('8').click();

  cy.get('.digit').contains('9').click();

  cy.get('#total').contains('789');
 });

 it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
  cy.get('.digit').contains('7').click();

  cy.get('.digit').contains('8').click();

  cy.get('.digit').contains('9').click();

  cy.get('.digit').contains('0').click();

  cy.get('#total').should('have.text', '789');
 });
});
