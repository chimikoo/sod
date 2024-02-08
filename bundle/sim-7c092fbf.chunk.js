import{A as t,dW as a,c as e,dX as s,S as r,di as o,dY as i,r as n,bD as S,bE as c,a as l,P as d,ab as f,dr as u,d as p,q as m,ac as h,aq as P,l as g,C as k,ar as A,b0 as w}from"./detailed_results-db275737.chunk.js";import{s as R,q as I,m as B,a as b,w as E,r as T,b as y,T as H,z as M,H as D,C as v,E as O,K as W,G as C,p as x,I as F}from"./preset_utils-d92d5f36.chunk.js";const U=R({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),N=I({fieldName:"shout",actionId:()=>t.fromSpellId(47436),value:a.WarriorShoutBattle}),L={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}}]},j=B("Blank",{items:[]}),q={[e.Phase1]:[j],[e.Phase2]:[]},V=q[e.Phase1][0],G=b("Default",L),K={[e.Phase1]:[G],[e.Phase2]:[]},_={25:K[e.Phase1][0],40:K[e.Phase1][0]},z=E("Simple Cooldowns",r.SpecProtectionWarrior,s.create()),X={name:"Standard",data:o.create({talentsString:"2500030023-302-053351225000012521030113321"})};o.create({talentsString:"35023301230051002020120002-2-05035122500000252"});const Y={[e.Phase1]:[X],[e.Phase2]:[]},J=Y[e.Phase1][0],Q=i.create({shout:a.WarriorShoutCommanding,startingRage:0}),Z=n.create({flask:S.FlaskUnknown,food:c.FoodUnknown}),$=T(r.SpecProtectionWarrior,{cssClass:"protection-warrior-sim-ui",cssScheme:"warrior",knownIssues:[],epStats:[l.StatStamina,l.StatStrength,l.StatAgility,l.StatAttackPower,l.StatExpertise,l.StatMeleeHit,l.StatMeleeCrit,l.StatMeleeHaste,l.StatArmor,l.StatBonusArmor,l.StatArmorPenetration,l.StatDefense,l.StatBlock,l.StatBlockValue,l.StatDodge,l.StatParry,l.StatResilience,l.StatNatureResistance,l.StatShadowResistance,l.StatFrostResistance],epPseudoStats:[d.PseudoStatMainHandDps],epReferenceStat:l.StatAttackPower,displayStats:[l.StatHealth,l.StatArmor,l.StatBonusArmor,l.StatStamina,l.StatStrength,l.StatAgility,l.StatAttackPower,l.StatExpertise,l.StatMeleeHit,l.StatMeleeCrit,l.StatMeleeHaste,l.StatArmorPenetration,l.StatDefense,l.StatBlock,l.StatBlockValue,l.StatDodge,l.StatParry,l.StatResilience,l.StatNatureResistance,l.StatShadowResistance,l.StatFrostResistance],defaults:{gear:V.gear,epWeights:y.fromMap({[l.StatArmor]:.174,[l.StatBonusArmor]:.155,[l.StatStamina]:2.336,[l.StatStrength]:1.555,[l.StatAgility]:2.771,[l.StatAttackPower]:.32,[l.StatExpertise]:1.44,[l.StatMeleeHit]:1.432,[l.StatMeleeCrit]:.925,[l.StatMeleeHaste]:.431,[l.StatArmorPenetration]:1.055,[l.StatBlock]:1.32,[l.StatBlockValue]:1.373,[l.StatDodge]:2.606,[l.StatParry]:2.649,[l.StatDefense]:3.305},{[d.PseudoStatMainHandDps]:6.081}),consumes:Z,talents:J.data,specOptions:Q,raidBuffs:f.create({giftOfTheWild:u.TristateEffectImproved,powerWordFortitude:u.TristateEffectImproved,strengthOfEarthTotem:u.TristateEffectRegular,leaderOfThePack:!0,devotionAura:u.TristateEffectImproved,stoneskinTotem:u.TristateEffectImproved,retributionAura:u.TristateEffectImproved,thorns:u.TristateEffectImproved,shadowProtection:!0}),partyBuffs:p.create({}),individualBuffs:m.create({blessingOfKings:!0,blessingOfMight:u.TristateEffectImproved,blessingOfSanctuary:!0}),debuffs:h.create({sunderArmor:!0,faerieFire:!0,insectSwarm:!0,judgementOfLight:!0})},playerIconInputs:[N],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[H,M,D,v,O,W,C,U,x]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[...Y[e.Phase1],...Y[P]],rotations:[z,...K[e.Phase1],...K[P]],gear:[...q[e.Phase1],...q[P]]},autoRotation:t=>_[t.getLevel()].rotation.rotation,raidSimPresets:[{spec:r.SpecProtectionWarrior,tooltip:"Protection Warrior",defaultName:"Protection",iconUrl:g(k.ClassWarrior,2),talents:X.data,specOptions:Q,consumes:Z,defaultFactionRaces:{[A.Unknown]:w.RaceUnknown,[A.Alliance]:w.RaceHuman,[A.Horde]:w.RaceOrc},defaultGear:{[A.Unknown]:{},[A.Alliance]:{1:q[e.Phase1][0].gear},[A.Horde]:{1:q[e.Phase1][0].gear}}}]});class tt extends F{constructor(t,a){super(t,a,$)}}export{tt as P};
//# sourceMappingURL=sim-7c092fbf.chunk.js.map
