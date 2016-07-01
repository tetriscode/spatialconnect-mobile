//
//  SCBridge.h
//  SCMobile
//
//  Created by Frank Rowe on 6/6/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "SCBridge.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import <ReactiveCocoa/RACSignal.h>
#import <SpatialConnect/SCRCTBridge.h>

@implementation SCBridge

@synthesize bridge = _bridge;

- (id)init {
  self = [super init];
  scBridge = [[SCRCTBridge alloc] init];
  return self;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(handler:(NSDictionary *)data)
{
  [scBridge handler:data responseCallback:^(NSDictionary *responseData) {
    [self.bridge.eventDispatcher sendAppEventWithName:responseData[@"action"] body:responseData[@"payload"]];
  }];
}

@end
