class ItemRender extends eui.ItemRenderer{
	public itemCheckBox:eui.CheckBox;
    public constructor() {
        super();
        // 皮肤名称
        this.skinName = "resource/eui_skins/SceneItemSkin.exml";
        this.itemCheckBox.addEventListener(eui.UIEvent.CHANGE, this.check, this);  
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
    }

    public childrenCreated(){
        Scene.instance.checkBoxArr.push(this);
        console.log(222);
    }


    private onComplete(){

    }
    
    public dataChanged():void{
    }

    public check(e:eui.UIEvent){
        let checkBox:eui.CheckBox = e.target;
		console.log(checkBox.selected);   //选中时true ，未选中时false
        console.log(Scene.instance.checkBoxArr);


        var all = true;
        for(var i=0;i<Scene.instance.checkBoxArr.length-1;i++){
            if(!Scene.instance.checkBoxArr[i].itemCheckBox.selected){
                all = all&&false;
            }
        }
        Scene.instance.all.selected = all;

    }
    public changeStatus(status){
        this.itemCheckBox.selected = status;
    }
    
}