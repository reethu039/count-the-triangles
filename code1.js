gdjs.LevelsCode = {};
gdjs.LevelsCode.GDSkyBackgroundObjects1= [];
gdjs.LevelsCode.GDSkyBackgroundObjects2= [];
gdjs.LevelsCode.GDSkyBackgroundObjects3= [];
gdjs.LevelsCode.GDlevel2_95imgObjects1= [];
gdjs.LevelsCode.GDlevel2_95imgObjects2= [];
gdjs.LevelsCode.GDlevel2_95imgObjects3= [];
gdjs.LevelsCode.GDlevel1_95buttonObjects1= [];
gdjs.LevelsCode.GDlevel1_95buttonObjects2= [];
gdjs.LevelsCode.GDlevel1_95buttonObjects3= [];
gdjs.LevelsCode.GDlevel2_95buttonObjects1= [];
gdjs.LevelsCode.GDlevel2_95buttonObjects2= [];
gdjs.LevelsCode.GDlevel2_95buttonObjects3= [];
gdjs.LevelsCode.GDheading_95textObjects1= [];
gdjs.LevelsCode.GDheading_95textObjects2= [];
gdjs.LevelsCode.GDheading_95textObjects3= [];
gdjs.LevelsCode.GDl1_95attemptsObjects1= [];
gdjs.LevelsCode.GDl1_95attemptsObjects2= [];
gdjs.LevelsCode.GDl1_95attemptsObjects3= [];
gdjs.LevelsCode.GDl1_95attempts_95headingObjects1= [];
gdjs.LevelsCode.GDl1_95attempts_95headingObjects2= [];
gdjs.LevelsCode.GDl1_95attempts_95headingObjects3= [];
gdjs.LevelsCode.GDl2_95attemptsObjects1= [];
gdjs.LevelsCode.GDl2_95attemptsObjects2= [];
gdjs.LevelsCode.GDl2_95attemptsObjects3= [];
gdjs.LevelsCode.GDl2_95attempts_95headingObjects1= [];
gdjs.LevelsCode.GDl2_95attempts_95headingObjects2= [];
gdjs.LevelsCode.GDl2_95attempts_95headingObjects3= [];


gdjs.LevelsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("level2_button"), gdjs.LevelsCode.GDlevel2_95buttonObjects2);
{for(var i = 0, len = gdjs.LevelsCode.GDlevel2_95buttonObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDlevel2_95buttonObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("l1_attempts"), gdjs.LevelsCode.GDl1_95attemptsObjects2);
{for(var i = 0, len = gdjs.LevelsCode.GDl1_95attemptsObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDl1_95attemptsObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("l2_attempts"), gdjs.LevelsCode.GDl2_95attemptsObjects1);
{for(var i = 0, len = gdjs.LevelsCode.GDl2_95attemptsObjects1.length ;i < len;++i) {
    gdjs.LevelsCode.GDl2_95attemptsObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


};gdjs.LevelsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("level1_button"), gdjs.LevelsCode.GDlevel1_95buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDlevel1_95buttonObjects2.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDlevel1_95buttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDlevel1_95buttonObjects2[k] = gdjs.LevelsCode.GDlevel1_95buttonObjects2[i];
        ++k;
    }
}
gdjs.LevelsCode.GDlevel1_95buttonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level1_button"), gdjs.LevelsCode.GDlevel1_95buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDlevel1_95buttonObjects2.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDlevel1_95buttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDlevel1_95buttonObjects2[k] = gdjs.LevelsCode.GDlevel1_95buttonObjects2[i];
        ++k;
    }
}
gdjs.LevelsCode.GDlevel1_95buttonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level1_button"), gdjs.LevelsCode.GDlevel1_95buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDlevel1_95buttonObjects1.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDlevel1_95buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDlevel1_95buttonObjects1[k] = gdjs.LevelsCode.GDlevel1_95buttonObjects1[i];
        ++k;
    }
}
gdjs.LevelsCode.GDlevel1_95buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level-1", false);
}}

}


};gdjs.LevelsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("level2_button"), gdjs.LevelsCode.GDlevel2_95buttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("level2_img"), gdjs.LevelsCode.GDlevel2_95imgObjects2);
{for(var i = 0, len = gdjs.LevelsCode.GDlevel2_95buttonObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDlevel2_95buttonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LevelsCode.GDlevel2_95imgObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDlevel2_95imgObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("level2_button"), gdjs.LevelsCode.GDlevel2_95buttonObjects2);
{for(var i = 0, len = gdjs.LevelsCode.GDlevel2_95buttonObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDlevel2_95buttonObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level2_button"), gdjs.LevelsCode.GDlevel2_95buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDlevel2_95buttonObjects2.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDlevel2_95buttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDlevel2_95buttonObjects2[k] = gdjs.LevelsCode.GDlevel2_95buttonObjects2[i];
        ++k;
    }
}
gdjs.LevelsCode.GDlevel2_95buttonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level2_button"), gdjs.LevelsCode.GDlevel2_95buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDlevel2_95buttonObjects2.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDlevel2_95buttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDlevel2_95buttonObjects2[k] = gdjs.LevelsCode.GDlevel2_95buttonObjects2[i];
        ++k;
    }
}
gdjs.LevelsCode.GDlevel2_95buttonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level2_button"), gdjs.LevelsCode.GDlevel2_95buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDlevel2_95buttonObjects1.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDlevel2_95buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDlevel2_95buttonObjects1[k] = gdjs.LevelsCode.GDlevel2_95buttonObjects1[i];
        ++k;
    }
}
gdjs.LevelsCode.GDlevel2_95buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level-2", false);
}}

}


};gdjs.LevelsCode.eventsList3 = function(runtimeScene) {

{


gdjs.LevelsCode.eventsList0(runtimeScene);
}


{


gdjs.LevelsCode.eventsList1(runtimeScene);
}


{


gdjs.LevelsCode.eventsList2(runtimeScene);
}


};

gdjs.LevelsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelsCode.GDSkyBackgroundObjects1.length = 0;
gdjs.LevelsCode.GDSkyBackgroundObjects2.length = 0;
gdjs.LevelsCode.GDSkyBackgroundObjects3.length = 0;
gdjs.LevelsCode.GDlevel2_95imgObjects1.length = 0;
gdjs.LevelsCode.GDlevel2_95imgObjects2.length = 0;
gdjs.LevelsCode.GDlevel2_95imgObjects3.length = 0;
gdjs.LevelsCode.GDlevel1_95buttonObjects1.length = 0;
gdjs.LevelsCode.GDlevel1_95buttonObjects2.length = 0;
gdjs.LevelsCode.GDlevel1_95buttonObjects3.length = 0;
gdjs.LevelsCode.GDlevel2_95buttonObjects1.length = 0;
gdjs.LevelsCode.GDlevel2_95buttonObjects2.length = 0;
gdjs.LevelsCode.GDlevel2_95buttonObjects3.length = 0;
gdjs.LevelsCode.GDheading_95textObjects1.length = 0;
gdjs.LevelsCode.GDheading_95textObjects2.length = 0;
gdjs.LevelsCode.GDheading_95textObjects3.length = 0;
gdjs.LevelsCode.GDl1_95attemptsObjects1.length = 0;
gdjs.LevelsCode.GDl1_95attemptsObjects2.length = 0;
gdjs.LevelsCode.GDl1_95attemptsObjects3.length = 0;
gdjs.LevelsCode.GDl1_95attempts_95headingObjects1.length = 0;
gdjs.LevelsCode.GDl1_95attempts_95headingObjects2.length = 0;
gdjs.LevelsCode.GDl1_95attempts_95headingObjects3.length = 0;
gdjs.LevelsCode.GDl2_95attemptsObjects1.length = 0;
gdjs.LevelsCode.GDl2_95attemptsObjects2.length = 0;
gdjs.LevelsCode.GDl2_95attemptsObjects3.length = 0;
gdjs.LevelsCode.GDl2_95attempts_95headingObjects1.length = 0;
gdjs.LevelsCode.GDl2_95attempts_95headingObjects2.length = 0;
gdjs.LevelsCode.GDl2_95attempts_95headingObjects3.length = 0;

gdjs.LevelsCode.eventsList3(runtimeScene);

return;

}

gdjs['LevelsCode'] = gdjs.LevelsCode;
