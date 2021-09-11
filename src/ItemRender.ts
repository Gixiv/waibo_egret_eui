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
        
    }


    private onComplete(){

    }
    
    public dataChanged():void{
        this.itemCheckBox.selected = this.data.selected;
    }

    public check(e:eui.UIEvent){
        let checkBox:eui.CheckBox = e.target;
		console.log(checkBox.selected);   //选中时true ，未选中时false
        //设置单个状态
        for(var i=0;i<Scene.instance.listdataArr.length;i++){
            if(Scene.instance.listdataArr[i].id == this.data.id){
               Scene.instance.listdataArr[i].selected = checkBox.selected;
            }
        }
        //检测是否全选中
        var all = true;
        for(var i=0;i<Scene.instance.listdataArr.length;i++){
            if(!Scene.instance.listdataArr[i].selected){
                all = all&&false;
            }
        }
        Scene.instance.all.selected = all;
    }
    public changeStatus(status){
        this.itemCheckBox.selected = status;
    }
    
}