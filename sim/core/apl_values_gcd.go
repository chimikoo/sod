package core

import (
	"time"

	"github.com/wowsims/wotlk/sim/core/proto"
)

type APLValueGCDIsReady struct {
	defaultAPLValueImpl
	unit *Unit
}

func (unit *Unit) newValueGCDIsReady(config *proto.APLValueGCDIsReady) APLValue {
	return &APLValueGCDIsReady{
		unit: unit,
	}
}
func (value *APLValueGCDIsReady) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeBool
}
func (value *APLValueGCDIsReady) GetBool(sim *Simulation) bool {
	return value.unit.GCD.IsReady(sim)
}

type APLValueGCDTimeToReady struct {
	defaultAPLValueImpl
	unit *Unit
}

func (unit *Unit) newValueGCDTimeToReady(config *proto.APLValueGCDTimeToReady) APLValue {
	return &APLValueGCDTimeToReady{
		unit: unit,
	}
}
func (value *APLValueGCDTimeToReady) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeDuration
}
func (value *APLValueGCDTimeToReady) GetDuration(sim *Simulation) time.Duration {
	return value.unit.GCD.TimeToReady(sim)
}