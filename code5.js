gdjs.wrong_95answerCode = {};
gdjs.wrong_95answerCode.GDSkyBackgroundObjects1= [];
gdjs.wrong_95answerCode.GDSkyBackgroundObjects2= [];
gdjs.wrong_95answerCode.GDwrongAnswer_95textObjects1= [];
gdjs.wrong_95answerCode.GDwrongAnswer_95textObjects2= [];
gdjs.wrong_95answerCode.GDnext_95buttonObjects1= [];
gdjs.wrong_95answerCode.GDnext_95buttonObjects2= [];


gdjs.wrong_95answerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next_button"), gdjs.wrong_95answerCode.GDnext_95buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.wrong_95answerCode.GDnext_95buttonObjects1.length;i<l;++i) {
    if ( gdjs.wrong_95answerCode.GDnext_95buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.wrong_95answerCode.GDnext_95buttonObjects1[k] = gdjs.wrong_95answerCode.GDnext_95buttonObjects1[i];
        ++k;
    }
}
gdjs.wrong_95answerCode.GDnext_95buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", false);
}}

}


};

gdjs.wrong_95answerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.wrong_95answerCode.GDSkyBackgroundObjects1.length = 0;
gdjs.wrong_95answerCode.GDSkyBackgroundObjects2.length = 0;
gdjs.wrong_95answerCode.GDwrongAnswer_95textObjects1.length = 0;
gdjs.wrong_95answerCode.GDwrongAnswer_95textObjects2.length = 0;
gdjs.wrong_95answerCode.GDnext_95buttonObjects1.length = 0;
gdjs.wrong_95answerCode.GDnext_95buttonObjects2.length = 0;

gdjs.wrong_95answerCode.eventsList0(runtimeScene);

return;

}

gdjs['wrong_95answerCode'] = gdjs.wrong_95answerCode;
