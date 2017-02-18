var CIRCLE_RADIUS = 16;
var COORD_X = [],
	COORD_Y = [],
	VALUE = [];
	
	COORD_X[0] = 300;	COORD_Y[0] = 30;
	COORD_X[1] = 120;	COORD_Y[1] = 90;
	COORD_X[2] = 210;	COORD_Y[2] = 90;
	COORD_X[3] = 270;	COORD_Y[3] = 150;
	COORD_X[4] = 420;	COORD_Y[4] = 180;
	COORD_X[5] = 240;	COORD_Y[5] = 240;
	COORD_X[6] = 120;	COORD_Y[6] = 240;
	COORD_X[7] = 180;	COORD_Y[7] = 300;
	VALUE[0] = 0;
	VALUE[1] = 1;
	VALUE[2] = 2;
	VALUE[3] = 3;
	VALUE[4] = 4;
	VALUE[5] = 5;
	VALUE[6] = 6;
	VALUE[7] = 7;
	
var numberOfNodes = VALUE.length;
var ways = [];

ways[0] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[4], COORD_Y[4]);
ways[1] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[1], COORD_Y[1]);
ways[2] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[6], COORD_Y[6]);
ways[3] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[3], COORD_Y[3]);

ways[4] = toStringPath(COORD_X[1], COORD_Y[1], COORD_X[7], COORD_Y[7]);
ways[5] = toStringPath(COORD_X[6], COORD_Y[6], COORD_X[2], COORD_Y[2]);
ways[6] = toStringPath(COORD_X[6], COORD_Y[6], COORD_X[7], COORD_Y[7]);
ways[7] = toStringPath(COORD_X[6], COORD_Y[6], COORD_X[3], COORD_Y[3]);

ways[8] = toStringPath(COORD_X[4], COORD_Y[4], COORD_X[3], COORD_Y[3]);
ways[9] = toStringPath(COORD_X[4], COORD_Y[4], COORD_X[5], COORD_Y[5]);
ways[10] = toStringPath(COORD_X[5], COORD_Y[5], COORD_X[7], COORD_Y[7]);
ways[11] = toStringPath(COORD_X[2], COORD_Y[2], COORD_X[4], COORD_Y[4]);

var numberOfEdges = ways.length;
