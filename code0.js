gdjs.Home_32PageCode = {};
gdjs.Home_32PageCode.GDSkyBackgroundObjects1= [];
gdjs.Home_32PageCode.GDSkyBackgroundObjects2= [];
gdjs.Home_32PageCode.GDtitle_95imgObjects1= [];
gdjs.Home_32PageCode.GDtitle_95imgObjects2= [];
gdjs.Home_32PageCode.GDLevels_95buttonObjects1= [];
gdjs.Home_32PageCode.GDLevels_95buttonObjects2= [];


gdjs.Home_32PageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Levels_button"), gdjs.Home_32PageCode.GDLevels_95buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32PageCode.GDLevels_95buttonObjects1.length;i<l;++i) {
    if ( gdjs.Home_32PageCode.GDLevels_95buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32PageCode.GDLevels_95buttonObjects1[k] = gdjs.Home_32PageCode.GDLevels_95buttonObjects1[i];
        ++k;
    }
}
gdjs.Home_32PageCode.GDLevels_95buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", false);
}}

}


};

gdjs.Home_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Home_32PageCode.GDSkyBackgroundObjects1.length = 0;
gdjs.Home_32PageCode.GDSkyBackgroundObjects2.length = 0;
gdjs.Home_32PageCode.GDtitle_95imgObjects1.length = 0;
gdjs.Home_32PageCode.GDtitle_95imgObjects2.length = 0;
gdjs.Home_32PageCode.GDLevels_95buttonObjects1.length = 0;
gdjs.Home_32PageCode.GDLevels_95buttonObjects2.length = 0;

gdjs.Home_32PageCode.eventsList0(runtimeScene);

return;

}

gdjs['Home_32PageCode'] = gdjs.Home_32PageCode;
