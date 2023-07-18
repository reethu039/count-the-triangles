gdjs.Level_451Code = {};
gdjs.Level_451Code.GDSkyBackgroundObjects1= [];
gdjs.Level_451Code.GDSkyBackgroundObjects2= [];
gdjs.Level_451Code.GDlevel1_95problemObjects1= [];
gdjs.Level_451Code.GDlevel1_95problemObjects2= [];
gdjs.Level_451Code.GDlevel1Objects1= [];
gdjs.Level_451Code.GDlevel1Objects2= [];
gdjs.Level_451Code.GDenterCount_95textObjects1= [];
gdjs.Level_451Code.GDenterCount_95textObjects2= [];
gdjs.Level_451Code.GDSubmit_95buttonObjects1= [];
gdjs.Level_451Code.GDSubmit_95buttonObjects2= [];
gdjs.Level_451Code.GDHome_95imgObjects1= [];
gdjs.Level_451Code.GDHome_95imgObjects2= [];
gdjs.Level_451Code.GDanswer_95button1Objects1= [];
gdjs.Level_451Code.GDanswer_95button1Objects2= [];
gdjs.Level_451Code.GDanswer_95button3Objects1= [];
gdjs.Level_451Code.GDanswer_95button3Objects2= [];
gdjs.Level_451Code.GDanswer_95button2Objects1= [];
gdjs.Level_451Code.GDanswer_95button2Objects2= [];


gdjs.Level_451Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer_button2"), gdjs.Level_451Code.GDanswer_95button2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_451Code.GDanswer_95button2Objects1.length;i<l;++i) {
    if ( gdjs.Level_451Code.GDanswer_95button2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_451Code.GDanswer_95button2Objects1[k] = gdjs.Level_451Code.GDanswer_95button2Objects1[i];
        ++k;
    }
}
gdjs.Level_451Code.GDanswer_95button2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "correct_answer", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer_button1"), gdjs.Level_451Code.GDanswer_95button1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_451Code.GDanswer_95button1Objects1.length;i<l;++i) {
    if ( gdjs.Level_451Code.GDanswer_95button1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_451Code.GDanswer_95button1Objects1[k] = gdjs.Level_451Code.GDanswer_95button1Objects1[i];
        ++k;
    }
}
gdjs.Level_451Code.GDanswer_95button1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "wrong_answer", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer_button3"), gdjs.Level_451Code.GDanswer_95button3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_451Code.GDanswer_95button3Objects1.length;i<l;++i) {
    if ( gdjs.Level_451Code.GDanswer_95button3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_451Code.GDanswer_95button3Objects1[k] = gdjs.Level_451Code.GDanswer_95button3Objects1[i];
        ++k;
    }
}
gdjs.Level_451Code.GDanswer_95button3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "wrong_answer", false);
}}

}


};

gdjs.Level_451Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_451Code.GDSkyBackgroundObjects1.length = 0;
gdjs.Level_451Code.GDSkyBackgroundObjects2.length = 0;
gdjs.Level_451Code.GDlevel1_95problemObjects1.length = 0;
gdjs.Level_451Code.GDlevel1_95problemObjects2.length = 0;
gdjs.Level_451Code.GDlevel1Objects1.length = 0;
gdjs.Level_451Code.GDlevel1Objects2.length = 0;
gdjs.Level_451Code.GDenterCount_95textObjects1.length = 0;
gdjs.Level_451Code.GDenterCount_95textObjects2.length = 0;
gdjs.Level_451Code.GDSubmit_95buttonObjects1.length = 0;
gdjs.Level_451Code.GDSubmit_95buttonObjects2.length = 0;
gdjs.Level_451Code.GDHome_95imgObjects1.length = 0;
gdjs.Level_451Code.GDHome_95imgObjects2.length = 0;
gdjs.Level_451Code.GDanswer_95button1Objects1.length = 0;
gdjs.Level_451Code.GDanswer_95button1Objects2.length = 0;
gdjs.Level_451Code.GDanswer_95button3Objects1.length = 0;
gdjs.Level_451Code.GDanswer_95button3Objects2.length = 0;
gdjs.Level_451Code.GDanswer_95button2Objects1.length = 0;
gdjs.Level_451Code.GDanswer_95button2Objects2.length = 0;

gdjs.Level_451Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_451Code'] = gdjs.Level_451Code;
