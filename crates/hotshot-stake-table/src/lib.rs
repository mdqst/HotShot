//! This crate contains some stake table implementations for HotShot system.
#![deny(warnings)]
#![deny(missing_docs)]
use ethereum_types::U256;
use serde::{Deserialize, Serialize};

pub mod config;
pub mod mt_based;
pub mod utils;
pub mod vec_based;

/// Stake table entry for the consensus use
#[derive(Serialize, Deserialize, PartialEq, Debug, Clone, Hash, Eq)]
pub struct StakeTableEntry<K> {
    /// Stake table key
    pub stake_key: K,
    /// Stake table value
    pub stake_amount: U256,
}

impl<K: Clone> StakeTableEntry<K> {
    /// Get the current stake amount
    pub fn get_stake(&self) -> U256 {
        self.stake_amount
    }

    /// Get the public key
    pub fn get_key(&self) -> &K {
        &self.stake_key
    }
}
