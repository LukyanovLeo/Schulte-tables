var CIRCLE_RADIUS = 16;
var COORD_X = [],
	COORD_Y = [],
	COORD_EDGE_X = [],
	COORD_EDGE_Y = [],
	WEIGHT_OF_EDGE = [],
	infinity = 1/0,
	VALUE = [];
	
	COORD_X[0] = 150;	COORD_Y[0] = 60;
	COORD_X[1] = 90;	COORD_Y[1] = 150;
	COORD_X[2] = 30;	COORD_Y[2] = 90;
	COORD_X[3] = 180;	COORD_Y[3] = 270;
	COORD_X[4] = 180;	COORD_Y[4] = 150;
	COORD_X[5] = 30;	COORD_Y[5] = 210;
	COORD_X[6] = 300;	COORD_Y[6] = 60;
	COORD_X[7] = 330;	COORD_Y[7] = 150;
	
	COORD_EDGE_X[0] =  110; COORD_EDGE_Y[0] = 100;
	COORD_EDGE_X[1] =  75 ; COORD_EDGE_Y[1] = 70;
	COORD_EDGE_X[2] =  170; COORD_EDGE_Y[2] = 90;
	COORD_EDGE_X[3] =  225; COORD_EDGE_Y[3] = 50;
	COORD_EDGE_X[4] =  125; COORD_EDGE_Y[4] = 210;
	COORD_EDGE_X[5] =  135; COORD_EDGE_Y[5] = 140;
	COORD_EDGE_X[6] =  55 ; COORD_EDGE_Y[6] = 175;
	COORD_EDGE_X[7] =  230; COORD_EDGE_Y[7] = 100;
	COORD_EDGE_X[8] =  240; COORD_EDGE_Y[8] = 180;
	COORD_EDGE_X[9] =  320; COORD_EDGE_Y[9] = 90;
	COORD_EDGE_X[10] = 20 ; COORD_EDGE_Y[10] = 130;
	
	WEIGHT_OF_EDGE[0] = 70;
	WEIGHT_OF_EDGE[1] = 30;
	WEIGHT_OF_EDGE[2] = 10;
	WEIGHT_OF_EDGE[3] = 20;
	WEIGHT_OF_EDGE[4] = 30;
	WEIGHT_OF_EDGE[5] = 20;
	WEIGHT_OF_EDGE[6] = 20;
	WEIGHT_OF_EDGE[7] = 10;
	WEIGHT_OF_EDGE[8] = 40;
	WEIGHT_OF_EDGE[9] = 20;
	WEIGHT_OF_EDGE[10] = 30;
	
	VALUE[0] = 0;
	VALUE[1] = 1;
	VALUE[2] = 2;
	VALUE[3] = 3;
	VALUE[4] = 4;
	VALUE[5] = 5;
	VALUE[6] = 6;
	VALUE[7] = 7;
	
	
var ways = [];

ways[0] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[1], COORD_Y[1]);
ways[1] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[2], COORD_Y[2]);
ways[2] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[4], COORD_Y[4]);
ways[3] = toStringPath(COORD_X[0], COORD_Y[0], COORD_X[6], COORD_Y[6]);

ways[4] = toStringPath(COORD_X[1], COORD_Y[1], COORD_X[3], COORD_Y[3]);
ways[5] = toStringPath(COORD_X[1], COORD_Y[1], COORD_X[4], COORD_Y[4]);
ways[6] = toStringPath(COORD_X[1], COORD_Y[1], COORD_X[5], COORD_Y[5]);
ways[7] = toStringPath(COORD_X[4], COORD_Y[4], COORD_X[6], COORD_Y[6]);

ways[8] = toStringPath(COORD_X[6], COORD_Y[6], COORD_X[3], COORD_Y[3]);
ways[9] = toStringPath(COORD_X[6], COORD_Y[6], COORD_X[7], COORD_Y[7]);
ways[10] = toStringPath(COORD_X[2], COORD_Y[2], COORD_X[5], COORD_Y[5]);

var numberOfNodes = VALUE.length;
var numberOfPaths = ways.length;