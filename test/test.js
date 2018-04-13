var expect = require("chai").expect;
var Bowling = require('../bowling.js');

describe('Bowling', function() {

	it('can make a throw', function() {
		var game = new Bowling();
		game.throwBall(0);
	});

	it('can score a game of all 0', function() {
		var game = new Bowling();
		game.throwAll([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
		expect(game.returnScore()).to.equal(0);
	});

	it('can score a game of all 5', function() {
		var game = new Bowling();
		game.throwAll([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5 ,5]);
		expect(game.returnScore()).to.equal(150);
	});

	it('can score a game of all 10', function() {
		var game = new Bowling();
		game.throwAll([10,10,10,10,10,10,10,10,10,10 ,10,10]);
		expect(game.returnScore()).to.equal(300);
	});

	it('can score a game with a spare and following 7', function() {
		var game = new Bowling();
		game.throwAll([4,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
		expect(game.returnScore()).to.equal(24);
	});

});