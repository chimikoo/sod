import{A as e,dW as a,c as t,di as s,ef as l,r as n,bD as i,bE as r,bz as o,bH as d,ab as p,dr as c,ac as h,a as u,P as I,d as m,q as S,aq as f,S as g,l as P,C as T,ar as v,b0 as k}from"./detailed_results-db275737.chunk.js";import{s as A,t as R,q as O,m as y,a as b,r as H,b as w,T as E,p as G,I as W}from"./preset_utils-d92d5f36.chunk.js";const M=A({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),C=R({fieldName:"stanceSnapshot",label:"Stance Snapshot",labelTooltip:"Ability that is cast at the same time as stance swap will benefit from the bonus of the stance before the swap."}),D=O({fieldName:"shout",actionId:()=>e.fromSpellId(6673),value:a.WarriorShoutBattle}),L={items:[{id:211505},{id:209422},{id:9817,randomSuffix:680},{id:213088,enchant:247},{id:211504,enchant:847,rune:402911},{id:209524,enchant:823},{id:209568,rune:429765},{id:6460},{id:209566,rune:425418},{id:211506,enchant:247},{id:20429},{id:211467},{id:211449},{id:21568},{id:209562},{},{id:209563}]},x={items:[{id:211505},{id:209422},{id:9817,randomSuffix:680},{id:213088,enchant:247},{id:211504,enchant:847,rune:402911},{id:209524,enchant:823},{id:209568,rune:413404},{id:6460},{id:209566,rune:425418},{id:211506,enchant:247},{id:20429},{id:211467},{id:211449},{id:21568},{id:209525},{id:209694},{id:209563}]},U={items:[{id:215166},{id:213344},{id:213304},{id:213307,enchant:247},{id:213313,enchant:866,rune:402877},{id:19581,enchant:856},{id:213319,enchant:856,rune:413404},{id:215115,rune:402922},{id:213332,rune:425418},{id:9637,enchant:849,rune:403338},{id:19512},{id:213284},{id:211449},{id:213348},{id:10823,enchant:241},{id:6802,enchant:241},{id:9426}]},B={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{spellCanCast:{spellId:{spellId:7384,rank:1}}},castSpell:{spellId:{spellId:7384,rank:1}}}},{action:{condition:{spellCanCast:{spellId:{spellId:402911}}},castSpell:{spellId:{spellId:402911}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{auraRemainingTime:{auraId:{spellId:425418}}}}},castSpell:{spellId:{spellId:5308,rank:1}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentRage:{}},rhs:{const:{val:"79"}}}},castSpell:{spellId:{spellId:429765},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{currentRage:{}},rhs:{const:{val:"40"}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:425418}}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:429765}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{currentRage:{}},rhs:{const:{val:"95"}}}},{cmp:{op:"OpLt",lhs:{autoTimeToNext:{autoType:"Melee"}},rhs:{gcdTimeToReady:{}}}}]}},castSpell:{spellId:{spellId:1608,tag:1,rank:4}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentRage:{}},rhs:{const:{val:"65"}}}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{spellIsReady:{spellId:{spellId:20572}}},castSpell:{spellId:{spellId:20572}}}}]},F={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"31s"}}}},castSpell:{spellId:{spellId:12328}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:402877}}}}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:402877}}}}},castSpell:{spellId:{spellId:18499}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{spellId:20660,rank:3}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{spellId:11565,tag:1,rank:6}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:1680}}}},{action:{castSpell:{spellId:{spellId:23894,rank:4}}}},{action:{condition:{auraIsActive:{auraId:{spellId:413399}}},castSpell:{spellId:{spellId:8820,rank:2}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{spellCastTime:{spellId:{spellId:8820,rank:2}}},rhs:{const:{val:"0"}}}},castSpell:{spellId:{spellId:8820,rank:2}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23894,rank:4}}},rhs:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:402911}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23894,rank:4}}},rhs:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:1680}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23894,rank:4}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}}]}},castSpell:{spellId:{spellId:429765}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"80"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:11608,tag:1,rank:3}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"80"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:11565,tag:1,rank:6}}}}]},q=y("P1 Arms 2H",L,{talentTree:0}),N=y("P1 Arms DW",x,{talentTree:0}),V=y("P1 Fury",L,{talentTree:1}),j=y("P2 Fury",U,{talentTree:1}),_={[t.Phase1]:[q,V,N],[t.Phase2]:[j]};_[t.Phase2][0];const z=b("P1 Preset",B),K=b("P2 Preset",F),J={[t.Phase1]:[z],[t.Phase2]:[K]},Q={25:{0:J[t.Phase1][0],1:J[t.Phase1][0],2:J[t.Phase1][0]},40:{0:J[t.Phase2][0],1:J[t.Phase2][0],2:J[t.Phase2][0]}},X={name:"Level 25",data:s.create({talentsString:"303220203-01"})},Y={name:"Level 40",data:s.create({talentsString:"-05050005405010051"})},Z={[t.Phase1]:[X],[t.Phase2]:[Y]},$=Z[t.Phase1][0],ee=Z[t.Phase2][0],ae=l.create({startingRage:0,useRecklessness:!0,shout:a.WarriorShoutBattle}),te=n.create({flask:i.FlaskUnknown,food:r.FoodGrilledSquid,mainHandImbue:o.WildStrikes,offHandImbue:o.DenseSharpeningStone,defaultPotion:d.UnknownPotion}),se=p.create({battleShout:c.TristateEffectImproved,devotionAura:c.TristateEffectImproved,giftOfTheWild:c.TristateEffectImproved,leaderOfThePack:!0,stoneskinTotem:c.TristateEffectImproved,strengthOfEarthTotem:c.TristateEffectRegular}),le=h.create({curseOfWeakness:c.TristateEffectRegular,faerieFire:!0,mangle:!0,sunderArmor:!0}),ne=H(g.SpecWarrior,{cssClass:"warrior-sim-ui",cssScheme:"warrior",knownIssues:["Rage conversion is a bit off for non 60s","Prot oriented Runes (Devastate and Sword and Board) are not yet implemented","Head and Bracers Runes are not yet implemented"],epStats:[u.StatStrength,u.StatAgility,u.StatAttackPower,u.StatMeleeHit,u.StatMeleeCrit,u.StatMeleeHaste,u.StatArmor],epPseudoStats:[I.PseudoStatMainHandDps,I.PseudoStatOffHandDps],epReferenceStat:u.StatAttackPower,displayStats:[u.StatHealth,u.StatStamina,u.StatStrength,u.StatAgility,u.StatAttackPower,u.StatMeleeHit,u.StatMeleeCrit,u.StatMeleeHaste,u.StatArmor],modifyDisplayStats:e=>({talents:new w}),defaults:{gear:j.gear,epWeights:w.fromMap({[u.StatStrength]:2.72,[u.StatAgility]:1.82,[u.StatAttackPower]:1,[u.StatExpertise]:2.55,[u.StatMeleeHit]:.79,[u.StatMeleeCrit]:2.12,[u.StatMeleeHaste]:1.72,[u.StatArmorPenetration]:2.17,[u.StatArmor]:.03},{[I.PseudoStatMainHandDps]:6.29,[I.PseudoStatOffHandDps]:3.58}),consumes:te,talents:Y.data,specOptions:ae,raidBuffs:se,partyBuffs:m.create({}),individualBuffs:S.create({blessingOfKings:!0,blessingOfMight:c.TristateEffectImproved}),debuffs:le},playerIconInputs:[D],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[M,C,E,G]},encounterPicker:{showExecuteProportion:!0},presets:{talents:[...Z[t.Phase1],...Z[f]],rotations:[...J[t.Phase1],...J[f]],gear:[..._[t.Phase1],..._[f]]},autoRotation:e=>Q[e.getLevel()][e.getTalentTree()].rotation.rotation,raidSimPresets:[{spec:g.SpecWarrior,tooltip:"Arms Warrior",defaultName:"Arms",iconUrl:P(T.ClassWarrior,0),talents:$.data,specOptions:ae,consumes:te,defaultFactionRaces:{[v.Unknown]:k.RaceUnknown,[v.Alliance]:k.RaceHuman,[v.Horde]:k.RaceOrc},defaultGear:{[v.Unknown]:{},[v.Alliance]:{1:_[t.Phase1][0].gear,2:_[t.Phase2][0].gear},[v.Horde]:{1:_[t.Phase1][0].gear,2:_[t.Phase2][0].gear}}},{spec:g.SpecWarrior,tooltip:"Fury Warrior",defaultName:"Fury",iconUrl:P(T.ClassWarrior,1),talents:ee.data,specOptions:ae,consumes:te,defaultFactionRaces:{[v.Unknown]:k.RaceUnknown,[v.Alliance]:k.RaceHuman,[v.Horde]:k.RaceOrc},defaultGear:{[v.Unknown]:{},[v.Alliance]:{1:_[t.Phase1][1].gear,2:_[t.Phase2][0].gear},[v.Horde]:{1:_[t.Phase1][1].gear,2:_[t.Phase2][0].gear}}}]});class ie extends W{constructor(e,a){super(e,a,ne)}}export{ie as W};
//# sourceMappingURL=sim-98d8dd9b.chunk.js.map
