function Bowling() {
	// array to hold all scores
	this.scores = [];
	
	// one instance of a throw given how many pins were hit
	this.throwBall = function(pinsHit) {
		this.scores.push(pinsHit);
		// account for second throw not taken
		if (pinsHit === 10) {
			this.scores.push(null);
		}
	}

	// helper to make multiple throws
	this.throwAll = function(throws) {
		for (var i = 0; i < throws.length; i++) {
			this.throwBall(throws[i]);
		};
	};
	
	this.returnScore = function() {
		var totalScore = 0;
		// holds index of the start of each new frame
		var startIndex = 0;

		for (var i = 0; i < 10; i++) {
			// each throw of the current frame
			var first = this.scores[startIndex];
			var second = this.scores[startIndex+1];
			totalScore += first + second;

			// each throw of the next frame
			var nextFirst = this.scores[startIndex+2];
			if (nextFirst === 10) {
				var nextSecond = this.scores[startIndex+4];
			} else {
				var nextSecond = this.scores[startIndex+3];
			}
			
			// if strike, add score for next frame
			if (first === 10) {
				totalScore += nextFirst + nextSecond;
			} 
			// if spare, add score for next throw
			else if ((first + second) === 10) {
				totalScore += nextFirst;
			}
			//iterate to next frame
			startIndex += 2;
		}

		return totalScore;
	}

};

module.exports = Bowling;