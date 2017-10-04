describe('Calculator', function () {

    beforeEach(function () {

        var fixture = `<div id="fixture"></div>
    <input id="text" type="text" placeholder="input a number">
    <button id="calculate-btn"></button>
    <p id="render"></p>
    </div>`

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);

        window.calculator.init();
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('should shows false when even', function () {
        document.getElementById("text").value = 2;
        document.getElementById("calculate-btn").click();
        var sut = document.getElementById("render").innerText;
        expect(sut).to.equal('false')
    })

    it('should shows true when odd', function () {
        document.getElementById("text").value = 1;
        document.getElementById("calculate-btn").click();
        var sut = document.getElementById("render").innerText;
        expect(sut).to.equal('true')
    })

})