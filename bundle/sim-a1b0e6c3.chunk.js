import{A as e,ad as t,ae as a,c as i,dC as s,S as r,di as n,dD as o,r as l,bD as c,bE as d,bH as u,bA as p,bz as f,bF as h,bG as m,E as S,a as g,Q as b,ab as T,dr as k,d as P,q as y,bM as F,ac as A,aq as w,de as M,da as C,u as I,df as R,aD as x,l as v,C as O,ar as D,b0 as E,x as B,T as H}from"./detailed_results-db275737.chunk.js";import{q as N,s as W,t as L,u as U,v as j,m as V,a as q,w as $,r as G,b as J,x as _,l as z,M as Q,J as K,o as X,T as Y,p as Z,I as ee}from"./preset_utils-d92d5f36.chunk.js";import{s as te}from"./apl_utils-ab88e2a1.chunk.js";N({fieldName:"innervateTarget",actionId:()=>e.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getSpecOptions().innervateTarget?.type==t.Player,setValue:(e,i,s)=>{const r=i.getSpecOptions();r.innervateTarget=a.create({type:s?t.Player:t.Unknown,index:0}),i.setSpecOptions(e,r)}});const ae=W({fieldName:"latencyMs",label:"Latency",labelTooltip:"Player latency, in milliseconds. Adds a delay to actions that cannot be spell queued."});L({fieldName:"assumeBleedActive",label:"Assume Bleed Always Active",labelTooltip:"Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",extraCssClasses:["within-raid-sim-hide"]});const ie={inputs:[U({fieldName:"minCombosForRip",label:"Min Rip CP",labelTooltip:"Combo Point threshold for allowing a Rip cast",float:!1,positive:!0}),U({fieldName:"maxWaitTime",label:"Max Wait Time",labelTooltip:"Max seconds to wait for an Energy tick to cast rather than powershifting",float:!0,positive:!0}),U({fieldName:"preroarDuration",label:"Pre-Roar Duration",labelTooltip:"Seconds remaining on a prior Savage Roar buff at the start of the pull",float:!0,positive:!0}),j({fieldName:"maintainFaerieFire",label:"Maintain Faerie Fire",labelTooltip:"If checked, bundle Faerie Fire refreshes with powershifts. Ignored if an external Faerie Fire debuff is selected in settings."}),j({fieldName:"precastTigersFury",label:"Pre-cast Tiger's Fury",labelTooltip:"If checked, model a pre-pull Tiger's Fury cast 3 seconds before initiating combat."}),j({fieldName:"useShredTrick",label:"Use Shred Trick",labelTooltip:'If checked, enable the "Shred trick" micro-optimization. This should only be used on short fight lengths with full powershifting uptime.'})]},se={items:[{id:211510},{id:209422},{id:209692},{id:213087,enchant:247},{id:211512,enchant:847,rune:407977},{id:209524,enchant:823},{id:211423,rune:407995},{id:209421},{id:10410,rune:407988},{id:211511,enchant:247},{id:20439},{id:6321},{id:211449},{id:4381},{id:209577,enchant:723},{},{id:209576}]},re={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:407988}}},doAtValue:{const:{val:"-8s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{catOptimalRotationAction:{maxWaitTime:2,minCombosForRip:3}}}]},ne=V("Blank",{items:[]}),oe=V("Phase 1",se),le={[i.Phase1]:[oe],[i.Phase2]:[]},ce=le[i.Phase1][0],de=q("APL Default",re),ue={[i.Phase1]:[de],[i.Phase2]:[]},pe={25:ue[i.Phase1][0],40:ue[i.Phase1][0]},fe=s.create({maintainFaerieFire:!1,minCombosForRip:3,maxWaitTime:2,preroarDuration:26,precastTigersFury:!1,useShredTrick:!1}),he=$("Simple Default",r.SpecFeralDruid,fe),me={name:"Standard",data:n.create({talentsString:"500005001--05"})},Se={[i.Phase1]:[me],[i.Phase2]:[]},ge=Se[i.Phase1][0],be=o.create({latencyMs:100,assumeBleedActive:!0}),Te=l.create({flask:c.FlaskUnknown,food:d.FoodSmokedSagefish,defaultPotion:u.ManaPotion,defaultConjured:p.ConjuredMinorRecombobulator,mainHandImbue:f.BlackfathomSharpeningStone,agilityElixir:h.ElixirOfLesserAgility,strengthBuff:m.ElixirOfOgresStrength,boglingRoot:!0}),ke={profession2:S.Leatherworking},Pe=G(r.SpecFeralDruid,{cssClass:"feral-druid-sim-ui",cssScheme:"druid",knownIssues:[],warnings:[],epStats:[g.StatStrength,g.StatAgility,g.StatAttackPower,g.StatFeralAttackPower,g.StatMeleeHit,g.StatMeleeCrit,g.StatMeleeHaste,g.StatMana,g.StatIntellect,g.StatSpirit,g.StatMP5],epPseudoStats:[],epReferenceStat:g.StatAttackPower,displayStats:[g.StatHealth,g.StatStrength,g.StatAgility,g.StatAttackPower,g.StatFeralAttackPower,g.StatMeleeHit,g.StatMeleeCrit,g.StatMeleeHaste,g.StatMana,g.StatIntellect,g.StatSpirit,g.StatMP5],defaults:{gear:ce.gear,epWeights:J.fromMap({[g.StatStrength]:2.2,[g.StatAgility]:2.02,[g.StatAttackPower]:1,[g.StatFeralAttackPower]:1,[g.StatMeleeHit]:8.21,[g.StatMeleeCrit]:8.19,[g.StatMeleeHaste]:4.17,[g.StatMana]:.04,[g.StatIntellect]:.67,[g.StatSpirit]:.08,[g.StatMP5]:.46},{}),consumes:Te,rotationType:b.TypeSimple,simpleRotation:fe,talents:ge.data,specOptions:be,raidBuffs:T.create({aspectOfTheLion:!0,arcaneBrilliance:!0,giftOfTheWild:k.TristateEffectRegular,battleShout:k.TristateEffectRegular}),partyBuffs:P.create({}),individualBuffs:y.create({blessingOfMight:k.TristateEffectImproved,blessingOfWisdom:k.TristateEffectRegular,boonOfBlackfathom:!0,ashenvalePvpBuff:!0,saygesFortune:F.SaygesDamage}),debuffs:A.create({judgementOfWisdom:!1,giftOfArthas:!1,exposeArmor:k.TristateEffectMissing,faerieFire:!1,sunderArmor:!0,curseOfRecklessness:!1,homunculi:0,curseOfVulnerability:!0,ancientCorrosivePoison:30}),other:ke},playerIconInputs:[],rotationInputs:ie,includeBuffDebuffInputs:[_,z,Q,K],excludeBuffDebuffInputs:[f.ElementalSharpeningStone,f.DenseSharpeningStone,f.WildStrikes,X],otherInputs:{inputs:[ae,Y,Z]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[...Se[i.Phase1],...Se[w]],rotations:[he,...ue[i.Phase1],...ue[w]],gear:[ne,...le[i.Phase1],...le[w]]},autoRotation:e=>pe[e.getLevel()].rotation.rotation,simpleRotation:(e,t,a)=>{let[i,s]=te(a);const r=Math.min(t.preroarDuration,33),n=M.fromJsonString(`{"action":{"activateAura":{"auraId":{"spellId":407988}}},"doAtValue":{"const":{"val":"-${(34-r).toFixed(2)}s"}}}`),o=M.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":5217,"rank":1}}},"doAtValue":{"const":{"val":"-3s"}}}'),l=C.fromJsonString(`{"catOptimalRotationAction":{"maxWaitTime":${t.maxWaitTime.toFixed(2)},"minCombosForRip":${t.minCombosForRip.toFixed(0)},"maintainFaerieFire":${t.maintainFaerieFire},"useShredTrick":${t.useShredTrick}}}`);return i.push(...[r>0?n:null,t.precastTigersFury?o:null].filter((e=>e))),s.push(...[l].filter((e=>e))),I.create({prepullActions:i,priorityList:s.map((e=>R.create({action:e})))})},raidSimPresets:[{spec:r.SpecFeralDruid,tooltip:x[r.SpecFeralDruid],defaultName:"Cat",iconUrl:v(O.ClassDruid,3),talents:ge.data,specOptions:be,consumes:Te,defaultFactionRaces:{[D.Unknown]:E.RaceUnknown,[D.Alliance]:E.RaceNightElf,[D.Horde]:E.RaceTauren},defaultGear:{[D.Unknown]:{},[D.Alliance]:{1:le[i.Phase1][0].gear},[D.Horde]:{1:le[i.Phase1][0].gear}}}]});class ye extends ee{constructor(e,t){super(e,t,Pe)}calcArpTarget(e){let t=1399;e.hasTrinket(45931)?t-=751:e.hasTrinket(40256)&&(t-=612);const a=e.getEquippedItem(B.ItemSlotMainHand);return null!=a&&null!=a.enchant&&3225==a.enchant.effectId&&(t-=120),t}calcCritCap(e){let t=0;return e.hasRelic(47668)&&(t+=200),e.hasRelic(50456)&&(t+=220),(e.hasTrinket(47131)||e.hasTrinket(47464))&&(t+=510),(e.hasTrinket(47115)||e.hasTrinket(47303))&&(t+=450),(e.hasTrinket(44253)||e.hasTrinket(42987))&&(t+=300),(new J).withStat(g.StatMeleeCrit,45.91*(77.8-1.1*t*1.06*1.02/83.33))}async updateGear(e){return this.player.setGear(H.nextEventID(),e),await this.sim.updateCharacterStats(H.nextEventID()),J.fromProto(this.player.getCurrentStats().finalStats)}detectArpStackConfiguration(e){const t=J.fromProto(this.player.getCurrentStats().finalStats).getStat(g.StatArmorPenetration);return e>1e3&&t>648&&t+20<e+11}}export{ye as F};
//# sourceMappingURL=sim-a1b0e6c3.chunk.js.map
