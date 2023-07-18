gdjs.correct_95answerCode = {};
gdjs.correct_95answerCode.GDSkyBackgroundObjects1= [];
gdjs.correct_95answerCode.GDSkyBackgroundObjects2= [];
gdjs.correct_95answerCode.GDawesome_95textObjects1= [];
gdjs.correct_95answerCode.GDawesome_95textObjects2= [];
gdjs.correct_95answerCode.GDHomeObjects1= [];
gdjs.correct_95answerCode.GDHomeObjects2= [];
gdjs.correct_95answerCode.GDnext_95buttonObjects1= [];
gdjs.correct_95answerCode.GDnext_95buttonObjects2= [];


gdjs.correct_95answerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next_button"), gdjs.correct_95answerCode.GDnext_95buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.correct_95answerCode.GDnext_95buttonObjects1.length;i<l;++i) {
    if ( gdjs.correct_95answerCode.GDnext_95buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.correct_95answerCode.GDnext_95buttonObjects1[k] = gdjs.correct_95answerCode.GDnext_95buttonObjects1[i];
        ++k;
    }
}
gdjs.correct_95answerCode.GDnext_95buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", false);
}}

}


};

gdjs.correct_95answerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.correct_95answerCode.GDSkyBackgroundObjects1.length = 0;
gdjs.correct_95answerCode.GDSkyBackgroundObjects2.length = 0;
gdjs.correct_95answerCode.GDawesome_95textObjects1.length = 0;
gdjs.correct_95answerCode.GDawesome_95textObjects2.length = 0;
gdjs.correct_95answerCode.GDHomeObjects1.length = 0;
gdjs.correct_95answerCode.GDHomeObjects2.length = 0;
gdjs.correct_95answerCode.GDnext_95buttonObjects1.length = 0;
gdjs.correct_95answerCode.GDnext_95buttonObjects2.length = 0;

gdjs.correct_95answerCode.eventsList0(runtimeScene);

return;

}

gdjs['correct_95answerCode'] = gdjs.correct_95answerCode;
