class Scene extends eui.Component{

public listdataArr:any[] = null;



public _bg:eui.Image;
public ruku:eui.Button;
public sc_beibao:eui.Scroller;
public beibao:eui.List;
public all:eui.CheckBox;


public static instance:Scene = null;


    public constructor(){
        super() 
        Scene.instance = this;
        this.skinName = "resource/eui_skins/SceneSkin.exml";
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
    }

    private onComplete(){
        this.ruku.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapBeibaoBtn,this);

        this.all.addEventListener(eui.UIEvent.CHANGE, this.allCheckbox, this);
        //隐藏滚动条
        this.sc_beibao.verticalScrollBar.autoVisibility = false;
        this.sc_beibao.verticalScrollBar.visible = false;
        
        this.show()
    }
    private onTapBeibaoBtn(){
        var string = '';
        for(var i=0;i<this.listdataArr.length;i++){
            if(this.listdataArr[i].selected){
                console.log(i);
                string +=this.listdataArr[i].id+',';
            }
        }

        alert(string);


        //let beibaoScene = new BeibaoScene();
        //this.parent.addChild(beibaoScene);
    }
    private show(){
        this.listdataArr = [
            {id:1,img:'item_png',name:'糖豆车1',selected:false},
            {id:2,img:'item_png',name:'糖豆车2',selected:false},
            {id:3,img:'item_png',name:'糖豆车3',selected:false},
            {id:4,img:'item_png',name:'糖豆车4',selected:false},
            {id:5,img:'item_png',name:'糖豆车5',selected:false},
            {id:6,img:'item_png',name:'糖豆车6',selected:false}
        ]
        this.beibao.dataProvider = new eui.ArrayCollection(this.listdataArr);
        this.beibao.itemRenderer = ItemRender;
        this.beibao.useVirtualLayout=false
    }
    private allCheckbox(e:eui.UIEvent){
        let checkBox:eui.CheckBox = e.target;
		console.log(checkBox.selected);   //选中时true ，未选中时false
        for(var i=0;i<this.listdataArr.length;i++){
            this.listdataArr[i].selected = checkBox.selected;
            this.beibao.dataProvider = new eui.ArrayCollection(this.listdataArr);
        }
    }
}